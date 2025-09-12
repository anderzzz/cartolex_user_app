#!/usr/bin/env python3
"""
Debug script to test the workflow execution API directly
Run this to isolate backend issues from frontend issues
"""

import requests
import json
import sys

# Configuration - adjust these values
BACKEND_URL = "http://localhost:5555"  # Your backend server
FRONTEND_URL = "http://localhost:3000"  # Your frontend server
WORKFLOW_NAME = "your_workflow_name"  # Replace with actual workflow name

def test_backend_direct():
    """Test the backend API directly (bypasses frontend entirely)"""
    print("=== Testing Backend API Directly ===")
    
    # Test 1: Get available workflows
    try:
        response = requests.get(f"{BACKEND_URL}/api/v1/workflow/workflows")
        print(f"GET /workflows - Status: {response.status_code}")
        if response.ok:
            workflows = response.json().get('workflows', [])
            print(f"Available workflows: {[w.get('name', 'unnamed') for w in workflows]}")
            if workflows:
                global WORKFLOW_NAME
                WORKFLOW_NAME = workflows[0].get('name', 'test')
        else:
            print(f"Error: {response.text}")
            return False
    except Exception as e:
        print(f"Failed to connect to backend: {e}")
        return False
    
    # Test 2: Execute a workflow
    print(f"\n=== Executing workflow: {WORKFLOW_NAME} ===")
    
    payload = {
        "parameters": {},  # Empty parameters - adjust as needed
        "execution": {
            "priority": "normal",
            "timeout": "300"
        }
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/v1/workflow/{WORKFLOW_NAME}/execute",
            json=payload,
            headers={'Content-Type': 'application/json'}
        )
        
        print(f"POST /workflow/{WORKFLOW_NAME}/execute - Status: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.ok:
            job_data = response.json()
            job_id = job_data.get('job_id')
            print(f"✅ Success! Job ID: {job_id}")
            return job_id
        else:
            print(f"❌ Backend API failed: {response.status_code} - {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Exception calling backend: {e}")
        return False

def test_frontend_endpoint():
    """Test the frontend Flask route (simulates browser request)"""
    print(f"\n=== Testing Frontend Route ===")
    
    # Simulate the form data that HTMX would send
    form_data = {
        'selected_workflow': WORKFLOW_NAME,
        'exec_priority': 'normal',
        'exec_timeout': '300'
    }
    
    try:
        response = requests.post(
            f"{FRONTEND_URL}/workflows/{WORKFLOW_NAME}/execute",
            data=form_data,  # Use data= for form data, not json=
            headers={'Content-Type': 'application/x-www-form-urlencoded'}
        )
        
        print(f"POST /workflows/{WORKFLOW_NAME}/execute - Status: {response.status_code}")
        print(f"Response length: {len(response.text)} characters")
        print(f"Response preview: {response.text[:200]}...")
        
        if response.ok:
            print("✅ Frontend route responded successfully")
            return True
        else:
            print(f"❌ Frontend route failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Exception calling frontend: {e}")
        return False

def generate_curl_commands():
    """Generate cURL commands for manual testing"""
    print(f"\n=== Manual cURL Commands ===")
    
    print("1. Test backend directly:")
    print(f"""curl -X POST "{BACKEND_URL}/api/v1/workflow/{WORKFLOW_NAME}/execute" \\
  -H "Content-Type: application/json" \\
  -d '{{"parameters": {{}}, "execution": {{"priority": "normal", "timeout": "300"}}}}'""")
    
    print("\n2. Test frontend route:")
    print(f"""curl -X POST "{FRONTEND_URL}/workflows/{WORKFLOW_NAME}/execute" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "selected_workflow={WORKFLOW_NAME}&exec_priority=normal&exec_timeout=300" """)

if __name__ == "__main__":
    print("🚀 Cartolex Workflow Debug Tool")
    print("=" * 50)
    
    # Test backend first
    job_id = test_backend_direct()
    
    if job_id:
        # If backend works, test frontend
        test_frontend_endpoint()
    
    # Always show manual commands
    generate_curl_commands()
    
    print("\n" + "=" * 50)
    print("💡 Debugging Tips:")
    print("1. Check browser DevTools → Network tab for the actual request")
    print("2. Check browser DevTools → Console for JavaScript logs")
    print("3. Check Flask server logs for backend processing")
    print("4. Use the cURL commands above to test each layer independently")