#!/usr/bin/env python3
"""
Template debugging script for Cartolex User App

Run this in your virtual environment to diagnose template path issues:
    python debug_templates.py
"""

import os
import sys
from pathlib import Path

def debug_template_paths():
    """Debug Flask template path configuration"""
    
    print("=== Flask Template Debugging ===\n")
    
    try:
        # Import and create the Flask app
        from cartolex_user_app.main import create_app
        app = create_app()
        
        # Configure SERVER_NAME for URL generation outside request context
        app.config['SERVER_NAME'] = 'localhost:3000'
        
        print("✓ Flask app created successfully")
        print(f"Flask version: {app.__class__.__module__}")
        
        # Check template folder configuration
        print(f"\nTemplate folder: {app.template_folder}")
        print(f"Instance path: {app.instance_path}")  
        print(f"Root path: {app.root_path}")
        print(f"Static folder: {app.static_folder}")
        
        # Resolve absolute template directory
        if os.path.isabs(app.template_folder):
            template_dir = app.template_folder
        else:
            template_dir = os.path.join(app.root_path, app.template_folder)
            
        print(f"Absolute template directory: {template_dir}")
        print(f"Template directory exists: {os.path.exists(template_dir)}")
        
        # Check specific template files
        templates_to_check = [
            'base.html',
            'dashboard.html', 
            'workflows/list.html',
            'workflows/jobs.html',
            'semantics/index.html',
            'semantics/llm_models.html'
        ]
        
        print(f"\n=== Template Files Check ===")
        for template in templates_to_check:
            template_path = os.path.join(template_dir, template)
            exists = os.path.exists(template_path)
            print(f"{'✓' if exists else '✗'} {template}: {template_path}")
            
        # List all template files found
        print(f"\n=== All Template Files Found ===")
        if os.path.exists(template_dir):
            for root, dirs, files in os.walk(template_dir):
                for file in files:
                    if file.endswith('.html'):
                        rel_path = os.path.relpath(os.path.join(root, file), template_dir)
                        print(f"  {rel_path}")
        else:
            print("Template directory does not exist!")
            
        # Check working directory vs app location
        print(f"\n=== Directory Information ===")
        print(f"Current working directory: {os.getcwd()}")
        print(f"Script location: {os.path.dirname(os.path.abspath(__file__))}")
        print(f"App root path: {app.root_path}")
        
        # Test template rendering
        print(f"\n=== Template Rendering Test ===")
        with app.test_request_context():
            try:
                from flask import render_template
                # Try rendering the problematic template
                result = render_template('workflows/list.html', workflows=[])
                print("✓ workflows/list.html renders successfully")
                print(f"  Rendered content length: {len(result)} characters")
            except Exception as e:
                print(f"✗ Error rendering workflows/list.html: {e}")
                
        # Check Jinja environment
        print(f"\n=== Jinja Environment ===")
        print(f"Jinja loader: {app.jinja_env.loader}")
        print(f"Jinja searchpath: {getattr(app.jinja_env.loader, 'searchpath', 'N/A')}")
        
    except ImportError as e:
        print(f"✗ Import error: {e}")
        print("Make sure you're running this in the correct virtual environment")
    except Exception as e:
        print(f"✗ Error creating Flask app: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    debug_template_paths()