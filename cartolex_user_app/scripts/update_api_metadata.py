#!/usr/bin/env python3
"""API Metadata Management CLI for Cartolex User App.

This tool fetches API metadata from the Cartolex backend Meta API endpoints
and stores them as JSON files for frontend development reference.

Usage:
    python scripts/update_api_metadata.py update
    python scripts/update_api_metadata.py update --backend-url http://localhost:5000
    python scripts/update_api_metadata.py module workflow
    python scripts/update_api_metadata.py status
    python scripts/update_api_metadata.py clean --confirm
"""

import typer
import json
import requests
import os
import shutil
from pathlib import Path
from datetime import datetime
from typing import Optional, Dict, Any, List
from rich.console import Console
from rich.table import Table
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.syntax import Syntax
from rich.panel import Panel

app = typer.Typer(
    help="API Metadata Management CLI for Cartolex User App frontend development",
    no_args_is_help=True
)
console = Console()


class APIMetadataError(Exception):
    """Custom exception for API metadata operations."""
    pass


class APIMetadataClient:
    """Client for fetching API metadata from backend."""

    def __init__(self, backend_url: str, timeout: int = 30):
        self.backend_url = backend_url.rstrip('/')
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({
            'Accept': 'application/json',
            'User-Agent': 'Cartolex-User-App-Metadata-Client/1.0'
        })

    def _make_request(self, endpoint: str) -> Dict[Any, Any]:
        """Make HTTP request to backend API."""
        url = f"{self.backend_url}{endpoint}"

        try:
            response = self.session.get(url, timeout=self.timeout)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.ConnectionError:
            raise APIMetadataError(f"Backend server not available at {self.backend_url}")
        except requests.exceptions.Timeout:
            raise APIMetadataError(f"Request timeout after {self.timeout}s")
        except requests.exceptions.RequestException as e:
            raise APIMetadataError(f"Request failed: {e}")
        except json.JSONDecodeError:
            raise APIMetadataError("Invalid JSON response from server")

    def get_all_endpoints(self) -> Dict[Any, Any]:
        """Fetch all API endpoints."""
        return self._make_request("/api/v1/meta/endpoints")

    def get_all_schemas(self) -> Dict[Any, Any]:
        """Fetch all Pydantic schemas."""
        return self._make_request("/api/v1/meta/schemas")

    def get_constants(self) -> Dict[Any, Any]:
        """Fetch API constants."""
        return self._make_request("/api/v1/meta/constants")

    def get_openapi(self) -> Dict[Any, Any]:
        """Fetch OpenAPI specification."""
        return self._make_request("/api/v1/meta/openapi")

    def get_module_endpoints(self, module: str) -> Dict[Any, Any]:
        """Fetch endpoints for specific module."""
        return self._make_request(f"/api/v1/meta/modules/{module}/endpoints")

    def get_module_schemas(self, module: str) -> Dict[Any, Any]:
        """Fetch schemas for specific module."""
        return self._make_request(f"/api/v1/meta/modules/{module}/schemas")


class MetadataStorage:
    """Handles storage and retrieval of API metadata files."""

    def __init__(self, base_dir: str = "api_metadata"):
        self.base_path = Path(base_dir)
        self.modules_path = self.base_path / "modules"

    def ensure_directories(self):
        """Create necessary directories."""
        self.base_path.mkdir(exist_ok=True)
        self.modules_path.mkdir(exist_ok=True)

    def save_json(self, filename: str, data: Dict[Any, Any], module: str = None):
        """Save data as JSON file."""
        if module:
            filepath = self.modules_path / f"{filename}"
        else:
            filepath = self.base_path / f"{filename}"

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

    def load_json(self, filename: str, module: str = None) -> Optional[Dict[Any, Any]]:
        """Load JSON file."""
        if module:
            filepath = self.modules_path / f"{filename}"
        else:
            filepath = self.base_path / f"{filename}"

        if not filepath.exists():
            return None

        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            return None

    def get_metadata_info(self) -> Dict[str, Any]:
        """Get metadata about stored files."""
        metadata_file = self.base_path / "_metadata.json"
        if metadata_file.exists():
            return self.load_json("_metadata.json") or {}
        return {}

    def save_metadata_info(self, info: Dict[str, Any]):
        """Save metadata information."""
        self.save_json("_metadata.json", info)

    def clean_all(self) -> int:
        """Remove all metadata files and return count of removed files."""
        if not self.base_path.exists():
            return 0

        file_count = 0
        for file_path in self.base_path.rglob("*.json"):
            file_path.unlink()
            file_count += 1

        # Remove empty directories
        if self.modules_path.exists() and not any(self.modules_path.iterdir()):
            self.modules_path.rmdir()

        return file_count

    def list_stored_files(self) -> List[str]:
        """List all stored metadata files."""
        if not self.base_path.exists():
            return []

        files = []
        for file_path in self.base_path.rglob("*.json"):
            relative_path = file_path.relative_to(self.base_path)
            files.append(str(relative_path))

        return sorted(files)


def get_client(backend_url: str) -> APIMetadataClient:
    """Create and return API client."""
    return APIMetadataClient(backend_url)


def get_storage() -> MetadataStorage:
    """Create and return metadata storage handler."""
    return MetadataStorage()


@app.command()
def update(
    backend_url: str = typer.Option(
        "http://localhost:5000",
        "--backend-url", "-b",
        help="Backend server URL"
    ),
    output_dir: str = typer.Option(
        "api_metadata",
        "--output-dir", "-o",
        help="Output directory for metadata files"
    ),
    force: bool = typer.Option(
        False,
        "--force", "-f",
        help="Force update even if backend version hasn't changed"
    )
):
    """Update all API metadata from backend Meta API endpoints.

    Fetches endpoints, schemas, constants, and OpenAPI specs from all modules
    and saves them as structured JSON files for frontend development.
    """
    try:
        console.print(f"\n[bold blue]🔄 Updating API Metadata[/bold blue]")
        console.print(f"[dim]Backend: {backend_url}[/dim]")
        console.print(f"[dim]Output: {output_dir}[/dim]")

        # Initialize client and storage
        client = get_client(backend_url)
        storage = MetadataStorage(output_dir)
        storage.ensure_directories()

        update_metadata = {
            "last_updated": datetime.utcnow().isoformat(),
            "backend_url": backend_url,
            "files_generated": [],
            "modules_updated": [],
            "total_endpoints": 0,
            "total_schemas": 0
        }

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console
        ) as progress:

            # Fetch core metadata
            core_task = progress.add_task("Fetching core metadata...", total=None)

            try:
                endpoints_data = client.get_all_endpoints()
                storage.save_json("endpoints.json", endpoints_data)
                update_metadata["files_generated"].append("endpoints.json")
                update_metadata["total_endpoints"] = endpoints_data.get("total_endpoints", 0)
                console.print("[green]✓[/green] All endpoints")

                schemas_data = client.get_all_schemas()
                storage.save_json("schemas.json", schemas_data)
                update_metadata["files_generated"].append("schemas.json")
                update_metadata["total_schemas"] = schemas_data.get("total_schemas", 0)
                console.print("[green]✓[/green] All schemas")

                constants_data = client.get_constants()
                storage.save_json("constants.json", constants_data)
                update_metadata["files_generated"].append("constants.json")
                console.print("[green]✓[/green] API constants")

                openapi_data = client.get_openapi()
                storage.save_json("openapi.json", openapi_data)
                update_metadata["files_generated"].append("openapi.json")
                console.print("[green]✓[/green] OpenAPI specification")

            except APIMetadataError as e:
                progress.update(core_task, description=f"❌ {e}")
                raise typer.Exit(1)

            progress.update(core_task, description="Core metadata complete")

            # Fetch module-specific metadata
            modules = ["workflow", "semantics", "io"]
            module_task = progress.add_task("Fetching module metadata...", total=len(modules))

            for module in modules:
                try:
                    # Module endpoints
                    module_endpoints = client.get_module_endpoints(module)
                    storage.save_json(f"{module}.json", {
                        "module": module,
                        "endpoints": module_endpoints,
                        "schemas": client.get_module_schemas(module)
                    }, module=True)

                    update_metadata["files_generated"].append(f"modules/{module}.json")
                    update_metadata["modules_updated"].append(module)
                    console.print(f"[green]✓[/green] Module: {module}")

                except APIMetadataError as e:
                    console.print(f"[yellow]⚠[/yellow]  Module {module}: {e}")

                progress.advance(module_task)

            progress.update(module_task, description="Module metadata complete")

        # Save update metadata
        storage.save_metadata_info(update_metadata)

        # Display summary
        console.print(f"\n[bold green]✅ API Metadata Updated Successfully![/bold green]")

        summary_table = Table(show_header=False, box=None, padding=(0, 2))
        summary_table.add_row("📁 Output Directory:", f"[cyan]{output_dir}[/cyan]")
        summary_table.add_row("📄 Files Generated:", f"[green]{len(update_metadata['files_generated'])}[/green]")
        summary_table.add_row("🔗 Total Endpoints:", f"[blue]{update_metadata['total_endpoints']}[/blue]")
        summary_table.add_row("📋 Total Schemas:", f"[blue]{update_metadata['total_schemas']}[/blue]")
        summary_table.add_row("🏗️  Modules Updated:", f"[magenta]{', '.join(update_metadata['modules_updated'])}[/magenta]")

        console.print(summary_table)

    except APIMetadataError as e:
        console.print(f"\n[red]❌ Error: {e}[/red]")
        raise typer.Exit(1)
    except Exception as e:
        console.print(f"\n[red]❌ Unexpected error: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def module(
    module_name: str = typer.Argument(..., help="Module name: workflow, semantics, or io"),
    backend_url: str = typer.Option(
        "http://localhost:5000",
        "--backend-url", "-b",
        help="Backend server URL"
    ),
    output_dir: str = typer.Option(
        "api_metadata",
        "--output-dir", "-o",
        help="Output directory for metadata files"
    )
):
    """Update metadata for a specific module only.

    Fetches endpoints and schemas for the specified module (workflow, semantics, or io)
    and saves them to the modules subdirectory.
    """
    if module_name not in ["workflow", "semantics", "io"]:
        console.print(f"[red]❌ Invalid module: {module_name}[/red]")
        console.print("[dim]Valid modules: workflow, semantics, io[/dim]")
        raise typer.Exit(1)

    try:
        console.print(f"\n[bold blue]🔄 Updating Module: {module_name}[/bold blue]")
        console.print(f"[dim]Backend: {backend_url}[/dim]")

        client = get_client(backend_url)
        storage = MetadataStorage(output_dir)
        storage.ensure_directories()

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console
        ) as progress:

            task = progress.add_task(f"Fetching {module_name} metadata...", total=None)

            try:
                # Get module endpoints and schemas
                module_endpoints = client.get_module_endpoints(module_name)
                module_schemas = client.get_module_schemas(module_name)

                # Combine into single module file
                module_data = {
                    "module": module_name,
                    "last_updated": datetime.utcnow().isoformat(),
                    "backend_url": backend_url,
                    "endpoints": module_endpoints,
                    "schemas": module_schemas
                }

                storage.save_json(f"{module_name}.json", module_data, module=True)

                progress.update(task, description=f"{module_name} metadata complete")

                console.print(f"\n[green]✅ Module '{module_name}' updated successfully![/green]")
                console.print(f"[dim]📁 Saved to: {output_dir}/modules/{module_name}.json[/dim]")

                # Show brief summary
                endpoint_count = module_endpoints.get("total_endpoints", 0)
                schema_count = module_schemas.get("total_schemas", 0)
                console.print(f"[dim]🔗 {endpoint_count} endpoints, 📋 {schema_count} schemas[/dim]")

            except APIMetadataError as e:
                progress.update(task, description=f"❌ {e}")
                raise typer.Exit(1)

    except APIMetadataError as e:
        console.print(f"\n[red]❌ Error: {e}[/red]")
        raise typer.Exit(1)
    except Exception as e:
        console.print(f"\n[red]❌ Unexpected error: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def status(
    output_dir: str = typer.Option(
        "api_metadata",
        "--output-dir", "-o",
        help="Metadata directory to check"
    )
):
    """Show current API metadata status and file information."""
    storage = MetadataStorage(output_dir)

    if not storage.base_path.exists():
        console.print(f"[yellow]📂 No metadata directory found at: {output_dir}[/yellow]")
        console.print("[dim]Run 'update' command to create initial metadata files.[/dim]")
        return

    metadata_info = storage.get_metadata_info()
    stored_files = storage.list_stored_files()

    if not metadata_info and not stored_files:
        console.print(f"[yellow]📂 Metadata directory exists but no files found at: {output_dir}[/yellow]")
        return

    console.print(f"\n[bold blue]📊 API Metadata Status[/bold blue]")

    # Show metadata info if available
    if metadata_info:
        info_table = Table(show_header=False, box=None, padding=(0, 2))

        if "last_updated" in metadata_info:
            last_updated = datetime.fromisoformat(metadata_info["last_updated"])
            time_ago = datetime.utcnow() - last_updated
            days_ago = time_ago.days

            if days_ago == 0:
                time_str = "Today"
            elif days_ago == 1:
                time_str = "Yesterday"
            else:
                time_str = f"{days_ago} days ago"

            info_table.add_row("📅 Last Updated:", f"[green]{time_str}[/green] ({last_updated.strftime('%Y-%m-%d %H:%M UTC')})")

        if "backend_url" in metadata_info:
            info_table.add_row("🌐 Backend URL:", f"[cyan]{metadata_info['backend_url']}[/cyan]")

        if "total_endpoints" in metadata_info:
            info_table.add_row("🔗 Total Endpoints:", f"[blue]{metadata_info['total_endpoints']}[/blue]")

        if "total_schemas" in metadata_info:
            info_table.add_row("📋 Total Schemas:", f"[blue]{metadata_info['total_schemas']}[/blue]")

        if "modules_updated" in metadata_info:
            info_table.add_row("🏗️  Modules:", f"[magenta]{', '.join(metadata_info['modules_updated'])}[/magenta]")

        console.print(info_table)

    # Show file listing
    if stored_files:
        console.print(f"\n[bold]📄 Stored Files ({len(stored_files)}):[/bold]")

        file_table = Table(show_header=True, header_style="bold magenta")
        file_table.add_column("File", style="cyan")
        file_table.add_column("Size", justify="right", style="yellow")
        file_table.add_column("Modified", style="white")

        for file_rel_path in stored_files:
            file_path = storage.base_path / file_rel_path

            if file_path.exists():
                size = file_path.stat().st_size
                modified = datetime.fromtimestamp(file_path.stat().st_mtime)

                # Format size
                if size < 1024:
                    size_str = f"{size} B"
                elif size < 1024 * 1024:
                    size_str = f"{size / 1024:.1f} KB"
                else:
                    size_str = f"{size / (1024 * 1024):.1f} MB"

                file_table.add_row(
                    file_rel_path,
                    size_str,
                    modified.strftime("%Y-%m-%d %H:%M")
                )

        console.print(file_table)

    # Show usage hint
    console.print(f"\n[dim]💡 Run 'python scripts/update_api_metadata.py update' to refresh metadata[/dim]")


@app.command()
def clean(
    output_dir: str = typer.Option(
        "api_metadata",
        "--output-dir", "-o",
        help="Metadata directory to clean"
    ),
    confirm: bool = typer.Option(
        False,
        "--confirm",
        help="Skip confirmation prompt"
    )
):
    """Remove all stored API metadata files."""
    storage = MetadataStorage(output_dir)

    if not storage.base_path.exists():
        console.print(f"[dim]📂 No metadata directory found at: {output_dir}[/dim]")
        return

    stored_files = storage.list_stored_files()
    if not stored_files:
        console.print(f"[dim]📂 No metadata files found in: {output_dir}[/dim]")
        return

    console.print(f"\n[bold yellow]🗑️  Clean API Metadata[/bold yellow]")
    console.print(f"[dim]Directory: {output_dir}[/dim]")
    console.print(f"[yellow]This will remove {len(stored_files)} metadata files.[/yellow]")

    if not confirm:
        if not typer.confirm("\n❓ Are you sure you want to remove all metadata files?"):
            console.print("[dim]Operation cancelled.[/dim]")
            return

    try:
        removed_count = storage.clean_all()
        console.print(f"\n[green]✅ Cleaned {removed_count} metadata files[/green]")

        if storage.base_path.exists() and not any(storage.base_path.iterdir()):
            storage.base_path.rmdir()
            console.print(f"[dim]📁 Removed empty directory: {output_dir}[/dim]")

    except Exception as e:
        console.print(f"\n[red]❌ Error cleaning files: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def list_endpoints(
    backend_url: str = typer.Option(
        "http://localhost:5000",
        "--backend-url", "-b",
        help="Backend server URL"
    ),
    module_name: Optional[str] = typer.Option(
        None,
        "--module", "-m",
        help="Filter by module: workflow, semantics, or io"
    )
):
    """List available API endpoints without saving files.

    Useful for quick discovery of available endpoints and their details.
    """
    try:
        console.print(f"\n[bold blue]🔍 Available API Endpoints[/bold blue]")
        console.print(f"[dim]Backend: {backend_url}[/dim]")

        client = get_client(backend_url)

        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            console=console
        ) as progress:

            task = progress.add_task("Fetching endpoint information...", total=None)

            try:
                if module_name:
                    if module_name not in ["workflow", "semantics", "io"]:
                        console.print(f"[red]❌ Invalid module: {module_name}[/red]")
                        raise typer.Exit(1)

                    endpoints_data = client.get_module_endpoints(module_name)
                    title = f"Endpoints - Module: {module_name}"
                else:
                    endpoints_data = client.get_all_endpoints()
                    title = "All Endpoints"

                progress.update(task, description="Processing endpoint data...")

                # Display endpoints table
                console.print(f"\n[bold green]{title}[/bold green]")

                if "endpoints" in endpoints_data:
                    endpoint_table = Table(show_header=True, header_style="bold magenta")
                    endpoint_table.add_column("Method", style="green", min_width=8)
                    endpoint_table.add_column("URL Pattern", style="cyan")
                    endpoint_table.add_column("Description", style="white")

                    for endpoint in endpoints_data["endpoints"]:
                        methods = "|".join(endpoint.get("methods", []))
                        url = endpoint.get("url", "")
                        description = endpoint.get("description", "")

                        endpoint_table.add_row(methods, url, description)

                    console.print(endpoint_table)

                    # Summary info
                    total = endpoints_data.get("total_endpoints", len(endpoints_data["endpoints"]))
                    console.print(f"\n[dim]📊 Total: {total} endpoints[/dim]")

                    if "modules" in endpoints_data:
                        console.print(f"[dim]🏗️  Modules: {', '.join(endpoints_data['modules'])}[/dim]")
                else:
                    console.print("[yellow]⚠️  No endpoint data returned[/yellow]")

            except APIMetadataError as e:
                progress.update(task, description=f"❌ {e}")
                raise typer.Exit(1)

    except APIMetadataError as e:
        console.print(f"\n[red]❌ Error: {e}[/red]")
        raise typer.Exit(1)
    except Exception as e:
        console.print(f"\n[red]❌ Unexpected error: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def info():
    """Show information about the API Metadata Management tool."""

    info_text = """
[bold blue]Cartolex API Metadata Management CLI[/bold blue]

This tool manages API contract metadata for the Cartolex User App frontend,
fetching structured information from the backend Meta API endpoints.

[bold green]Features:[/bold green]
• Fetch complete API metadata: endpoints, schemas, constants, OpenAPI
• Module-specific updates for targeted development
• Rich console output with progress indicators and summaries
• Offline development support through cached JSON contracts
• Integration with existing Cartolex development patterns

[bold yellow]Commands:[/bold yellow]
• update: Fetch all API metadata from backend
• module: Update specific module (workflow, semantics, io)
• status: Show current metadata status and file info
• clean: Remove all stored metadata files
• list-endpoints: Quick endpoint discovery without file creation
• info: Show this help information

[bold cyan]Example Workflows:[/bold cyan]

1. Initial setup:
   [dim]python scripts/update_api_metadata.py update[/dim]

2. Module-specific update:
   [dim]python scripts/update_api_metadata.py module workflow[/dim]

3. Check current status:
   [dim]python scripts/update_api_metadata.py status[/dim]

4. Quick endpoint discovery:
   [dim]python scripts/update_api_metadata.py list-endpoints --module io[/dim]

[bold red]Benefits for Frontend Development:[/bold red]
• Claude Code can read exact API contracts without browsing backend code
• Understand request/response JSON structures and validation rules
• Use correct field names and types when building new features
• Reference available endpoints during template development
• Contract-driven development with offline capability

[bold magenta]Output Structure:[/bold magenta]
api_metadata/
├── endpoints.json          # All endpoints overview
├── schemas.json           # All Pydantic schemas
├── constants.json         # URL constants
├── openapi.json          # Full OpenAPI spec
└── modules/              # Module-specific contracts
    ├── workflow.json     # Workflow API metadata
    ├── semantics.json    # Semantics API metadata
    └── io.json          # IO configuration API metadata
    """

    console.print(Panel(info_text, title="API Metadata Management", border_style="blue"))


if __name__ == "__main__":
    app()