from fastapi.testclient import TestClient

from api.main import app

client = TestClient(app)

def test_create_todo():
    """Test create_todo API endpoint."""
    todo_json={
        "id": "autotest_todo2",
        "name": "Test TODO Name",
        "description": "Test TODO Description",
    }
    response = client.post("/todos", json=todo_json)
    assert response.status_code == 200
    assert response.json()["id"] == todo_json["id"]
    assert response.json()["name"] == todo_json["name"]
    assert response.json()["description"] == todo_json["description"]
    assert not response.json()["done"] # Test that value is false by default

def test_list_todo_item():
    response = client.get("/todos")
    assert response.status_code == 200
    # here some assertions are missing, but not yet writed waiting to setup specific DB for testing  

def test_update_todo_item():
    """Test delete_todo API endpoint."""
    todo_item = client.get("/todos/autotest_todo2")
    todo_json={
        "id": todo_item.json()["id"],
        "name": todo_item.json()["name"],
        "description": todo_item.json()["description"],
        "done": True,
    }

    response = client.put("/todos/autotest_todo2", json=todo_json)
    assert response.status_code == 200
    assert response.json()["id"] == todo_json["id"]
    assert response.json()["name"] == todo_json["name"]
    assert response.json()["description"] == todo_json["description"]
    assert response.json()["done"] == todo_json["done"] # Test that value has been updated to True


def test_delete_todo_item():
    """Test delete_todo API endpoint."""
    response = client.delete("/todos/autotest_todo2")
    assert response.status_code == 200
