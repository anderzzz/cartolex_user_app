"""Command-line interface for the Cartolex User App.

Usage:
    python cli.py dev --host 0.0.0.0 --port 3000
    python cli.py prod --host 0.0.0.0 --port 3000 --ssl-cert cert.pem --ssl-key key.pem
    python cli.py serve --config development --host localhost --port 3000
    python cli.py config-check
    python cli.py health-check
    python cli.py routes

"""
import typer
import os
import ssl
from typing import Optional
from enum import Enum
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich import box

from cartolex_user_app.main import create_app
from cartolex_user_app.config import DevelopmentConfig, ProductionConfig

app = typer.Typer(help="CLI tool for running the Cartolex User App")
console = Console()


class ConfigMode(str, Enum):
    """Supported configuration modes."""
    DEVELOPMENT = "development"
    PRODUCTION = "production"


def _create_app_with_config(config_class=None):
    """Create Flask app with specified configuration."""
    return create_app(config_class)


def _print_startup_banner(config_name: str, host: str, port: int, debug: bool = False, ssl_enabled: bool = False):
    """Print a startup banner with configuration info."""
    protocol = "https" if ssl_enabled else "http"
    url = f"{protocol}://{host}:{port}"
    
    config_info = f"""[bold blue]Cartolex User App[/bold blue]

[green]Configuration:[/green] {config_name}
[green]Host:[/green] {host}
[green]Port:[/green] {port}
[green]Debug Mode:[/green] {'Enabled' if debug else 'Disabled'}
[green]SSL:[/green] {'Enabled' if ssl_enabled else 'Disabled'}
[green]URL:[/green] {url}

[yellow]Available Routes:[/yellow]
• Dashboard: {url}/
• Workflows: {url}/workflows
• Semantics: {url}/semantics  
• IO Config: {url}/io"""

    console.print(Panel(config_info, box=box.ROUNDED, padding=(1, 2)))


@app.command()
def dev(
    host: str = typer.Option("localhost", "--host", "-h", help="Host to bind to"),
    port: int = typer.Option(3000, "--port", "-p", help="Port to bind to"),
    debug: bool = typer.Option(True, "--debug/--no-debug", help="Enable debug mode"),
    reload: bool = typer.Option(True, "--reload/--no-reload", help="Enable auto-reload on code changes"),
):
    """Run the application in development mode with debug features enabled."""
    try:
        _print_startup_banner("Development", host, port, debug, False)
        
        flask_app = _create_app_with_config(DevelopmentConfig)
        
        console.print("\n[bold green]Starting development server...[/bold green]")
        flask_app.run(
            host=host,
            port=port,
            debug=debug,
            use_reloader=reload
        )
    except Exception as e:
        console.print(f"[red]Error starting development server: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def prod(
    host: str = typer.Option("0.0.0.0", "--host", "-h", help="Host to bind to"),
    port: int = typer.Option(3000, "--port", "-p", help="Port to bind to"),
    ssl_cert: Optional[str] = typer.Option(None, "--ssl-cert", help="Path to SSL certificate file"),
    ssl_key: Optional[str] = typer.Option(None, "--ssl-key", help="Path to SSL private key file"),
    workers: int = typer.Option(1, "--workers", "-w", help="Number of worker processes (for production WSGI)"),
):
    """Run the application in production mode with security features enabled."""
    try:
        ssl_enabled = bool(ssl_cert and ssl_key)
        _print_startup_banner("Production", host, port, False, ssl_enabled)
        
        flask_app = _create_app_with_config(ProductionConfig)
        
        # Validate SSL files if provided
        if ssl_enabled:
            if not os.path.exists(ssl_cert):
                console.print(f"[red]SSL certificate file not found: {ssl_cert}[/red]")
                raise typer.Exit(1)
            if not os.path.exists(ssl_key):
                console.print(f"[red]SSL private key file not found: {ssl_key}[/red]")
                raise typer.Exit(1)
            
            ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
            ssl_context.load_cert_chain(ssl_cert, ssl_key)
        else:
            ssl_context = None
        
        console.print("\n[bold green]Starting production server...[/bold green]")
        if workers > 1:
            console.print(f"[yellow]Note: Multiple workers ({workers}) specified but Flask's built-in server is single-threaded.[/yellow]")
            console.print("[yellow]For production deployment, consider using Gunicorn or uWSGI.[/yellow]")
        
        flask_app.run(
            host=host,
            port=port,
            debug=False,
            ssl_context=ssl_context,
            threaded=True
        )
    except Exception as e:
        console.print(f"[red]Error starting production server: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def serve(
    config: ConfigMode = typer.Option(ConfigMode.DEVELOPMENT, "--config", "-c", help="Configuration mode"),
    host: str = typer.Option("localhost", "--host", "-h", help="Host to bind to"),
    port: int = typer.Option(3000, "--port", "-p", help="Port to bind to"),
    debug: Optional[bool] = typer.Option(None, "--debug/--no-debug", help="Enable debug mode (auto-detected if not specified)"),
    ssl_cert: Optional[str] = typer.Option(None, "--ssl-cert", help="Path to SSL certificate file"),
    ssl_key: Optional[str] = typer.Option(None, "--ssl-key", help="Path to SSL private key file"),
):
    """Run the application with custom configuration options."""
    try:
        # Select configuration class
        if config == ConfigMode.DEVELOPMENT:
            config_class = DevelopmentConfig
            config_name = "Development"
            default_debug = True
        else:
            config_class = ProductionConfig
            config_name = "Production"
            default_debug = False
        
        # Use provided debug setting or default based on config
        debug_mode = debug if debug is not None else default_debug
        ssl_enabled = bool(ssl_cert and ssl_key)
        
        _print_startup_banner(config_name, host, port, debug_mode, ssl_enabled)
        
        flask_app = _create_app_with_config(config_class)
        
        # Handle SSL setup
        ssl_context = None
        if ssl_enabled:
            if not os.path.exists(ssl_cert):
                console.print(f"[red]SSL certificate file not found: {ssl_cert}[/red]")
                raise typer.Exit(1)
            if not os.path.exists(ssl_key):
                console.print(f"[red]SSL private key file not found: {ssl_key}[/red]")
                raise typer.Exit(1)
            
            ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
            ssl_context.load_cert_chain(ssl_cert, ssl_key)
        
        console.print(f"\n[bold green]Starting {config_name.lower()} server...[/bold green]")
        flask_app.run(
            host=host,
            port=port,
            debug=debug_mode,
            ssl_context=ssl_context,
            threaded=True
        )
    except Exception as e:
        console.print(f"[red]Error starting server: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def config_check(
    config: ConfigMode = typer.Option(ConfigMode.DEVELOPMENT, "--config", "-c", help="Configuration mode to check")
):
    """Validate configuration and display current settings."""
    try:
        # Select configuration class
        if config == ConfigMode.DEVELOPMENT:
            config_class = DevelopmentConfig
            config_name = "Development"
        else:
            config_class = ProductionConfig
            config_name = "Production"
        
        console.print(f"\n[bold blue]Configuration Check: {config_name} Mode[/bold blue]")
        
        # Create app to get configuration
        flask_app = _create_app_with_config(config_class)
        
        # Display configuration table
        table = Table(show_header=True, header_style="bold magenta", box=box.ROUNDED)
        table.add_column("Setting", style="cyan", no_wrap=True)
        table.add_column("Value", style="white")
        table.add_column("Source", style="yellow")
        
        # Configuration settings to display
        config_items = [
            ("DEBUG", str(flask_app.config.get('DEBUG', 'Not Set')), "Flask Config"),
            ("FLASK_SECRET_USER_APP", "***" if flask_app.config.get('SECRET_KEY') else "Not Set", "Environment/Config"),
            ("CARTOLEX_API_BASE_URL", flask_app.config.get('CARTOLEX_API_BASE_URL', 'Not Set'), "Environment/Config"),
            ("CORS_ORIGINS_USER_APP", str(flask_app.config.get('CORS_ORIGINS', 'Not Set')), "Environment/Config"),
            ("SECURITY_HEADERS_ENABLED_USER_APP", str(flask_app.config.get('SECURITY_HEADERS_ENABLED', 'Not Set')), "Environment/Config"),
            ("CSP_MODE_USER_APP", flask_app.config.get('CSP_MODE', 'Not Set'), "Environment/Config"),
            ("DISABLE_SECURITY_USER_APP", str(flask_app.config.get('DISABLE_SECURITY', 'Not Set')), "Environment/Config"),
            ("RATELIMIT_DEFAULT_USER_APP", flask_app.config.get('RATELIMIT_DEFAULT', 'Not Set'), "Environment/Config"),
            ("RATELIMIT_ENABLED_USER_APP", str(flask_app.config.get('RATELIMIT_ENABLED', 'Not Set')), "Environment/Config"),
        ]
        
        for setting, value, source in config_items:
            table.add_row(setting, str(value), source)
        
        console.print(table)
        
        # Check for potential issues
        issues = []
        
        if not flask_app.config.get('SECRET_KEY') or flask_app.config.get('SECRET_KEY') == 'dev-secret-key-change-in-production':
            if config == ConfigMode.PRODUCTION:
                issues.append("FLASK_SECRET_USER_APP should be set to a secure value in production")
            elif config == ConfigMode.DEVELOPMENT:
                issues.append("Using default FLASK_SECRET_USER_APP (acceptable for development)")
        
        if config == ConfigMode.PRODUCTION and flask_app.config.get('DEBUG'):
            issues.append("DEBUG should be disabled in production mode")
        
        if not flask_app.config.get('CARTOLEX_API_BASE_URL'):
            issues.append("CARTOLEX_API_BASE_URL not configured")
        
        # Display issues
        if issues:
            console.print("\n[bold yellow]Configuration Issues:[/bold yellow]")
            for i, issue in enumerate(issues, 1):
                console.print(f"  {i}. [yellow]{issue}[/yellow]")
        else:
            console.print("\n[bold green]✓ Configuration looks good![/bold green]")
        
    except Exception as e:
        console.print(f"[red]Error checking configuration: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def health_check():
    """Verify application health and dependencies."""
    try:
        console.print("\n[bold blue]Application Health Check[/bold blue]")
        
        # Create app for health check
        flask_app = _create_app_with_config()
        
        # Check results
        checks = []
        
        # Flask app creation
        checks.append(("Flask App Creation", "✓ Passed", "green"))
        
        # Blueprint registration
        try:
            blueprints = list(flask_app.blueprints.keys())
            if len(blueprints) >= 4:  # dashboard + workflows + semantics + io_config
                checks.append(("Blueprint Registration", f"✓ {len(blueprints)} blueprints registered", "green"))
            else:
                checks.append(("Blueprint Registration", f"⚠ Only {len(blueprints)} blueprints found", "yellow"))
        except Exception as e:
            checks.append(("Blueprint Registration", f"✗ Failed: {e}", "red"))
        
        # Configuration validation
        try:
            config_issues = []
            if not flask_app.config.get('SECRET_KEY'):
                config_issues.append("Missing FLASK_SECRET_USER_APP")
            
            if config_issues:
                checks.append(("Configuration", f"⚠ Issues: {', '.join(config_issues)}", "yellow"))
            else:
                checks.append(("Configuration", "✓ Basic configuration valid", "green"))
        except Exception as e:
            checks.append(("Configuration", f"✗ Failed: {e}", "red"))
        
        # Dependencies check
        try:
            import flask, requests, typer, rich
            checks.append(("Dependencies", "✓ All required packages available", "green"))
        except ImportError as e:
            missing = str(e).split("'")[1] if "'" in str(e) else "unknown"
            checks.append(("Dependencies", f"⚠ Missing: {missing}", "yellow"))
        
        # Backend API connectivity check
        try:
            api_url = flask_app.config.get('CARTOLEX_API_BASE_URL')
            if api_url:
                checks.append(("Backend API Config", f"✓ Configured: {api_url}", "green"))
            else:
                checks.append(("Backend API Config", "⚠ Not configured", "yellow"))
        except Exception as e:
            checks.append(("Backend API Config", f"✗ Failed: {e}", "red"))
        
        # Template directory check
        try:
            template_dir = flask_app.template_folder
            if os.path.exists(template_dir):
                template_count = len([f for f in os.listdir(template_dir) if f.endswith('.html')])
                checks.append(("Templates", f"✓ {template_count} templates found", "green"))
            else:
                checks.append(("Templates", "⚠ Template directory not found", "yellow"))
        except Exception as e:
            checks.append(("Templates", f"✗ Failed: {e}", "red"))
        
        # Display results in table
        table = Table(show_header=True, header_style="bold magenta", box=box.ROUNDED)
        table.add_column("Check", style="cyan", no_wrap=True)
        table.add_column("Result", style="white")
        
        for check_name, result, color in checks:
            table.add_row(check_name, f"[{color}]{result}[/{color}]")
        
        console.print(table)
        
        # Overall status
        failed_checks = [c for c in checks if "✗" in c[1]]
        warning_checks = [c for c in checks if "⚠" in c[1]]
        
        if failed_checks:
            console.print(f"\n[bold red]Health Check Status: FAILED ({len(failed_checks)} critical issues)[/bold red]")
        elif warning_checks:
            console.print(f"\n[bold yellow]Health Check Status: WARNING ({len(warning_checks)} issues to review)[/bold yellow]")
        else:
            console.print("\n[bold green]Health Check Status: HEALTHY ✓[/bold green]")
        
    except Exception as e:
        console.print(f"[red]Error running health check: {e}[/red]")
        raise typer.Exit(1)


@app.command()
def routes():
    """Display all Flask routes and their methods."""
    try:
        console.print("\n[bold blue]Flask Application Routes[/bold blue]")
        
        # Create app to inspect routes
        flask_app = _create_app_with_config()
        
        table = Table(show_header=True, header_style="bold magenta", box=box.ROUNDED)
        table.add_column("Route", style="cyan")
        table.add_column("Methods", style="green")
        table.add_column("Endpoint", style="yellow")
        table.add_column("Blueprint", style="white")
        
        # Get all routes
        for rule in flask_app.url_map.iter_rules():
            methods = ', '.join(sorted([m for m in rule.methods if m not in ['HEAD', 'OPTIONS']]))
            endpoint = rule.endpoint
            
            # Determine blueprint
            if '.' in endpoint:
                blueprint = endpoint.split('.')[0]
            else:
                blueprint = 'main'
            
            table.add_row(
                str(rule.rule),
                methods,
                endpoint,
                blueprint
            )
        
        console.print(table)
        
        # Route summary
        total_routes = len(list(flask_app.url_map.iter_rules()))
        console.print(f"\n[dim]Total routes: {total_routes}[/dim]")
        
    except Exception as e:
        console.print(f"[red]Error listing routes: {e}[/red]")
        raise typer.Exit(1)


if __name__ == "__main__":
    app()