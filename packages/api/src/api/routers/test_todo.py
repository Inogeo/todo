import pytest
from fastapi.testclient import TestClient
from sqlmodel import Session, SQLModel, create_engine
from sqlmodel.pool import StaticPool

from api.main import app
from api.database import get_session


# In memory db used for tests
@pytest.fixture(name="session")
def session_fixture():
    engine = create_engine(
        "sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool
    )
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        yield session


@pytest.fixture(name="client")
def client_fixture(session: Session):
    def get_session_override():
        return session

    app.dependency_overrides[get_session] = get_session_override

    client = TestClient(app)
    yield client
    app.dependency_overrides.clear()


def test_create_todo(client: TestClient, session: Session):
    """Test create_todo API endpoint."""
    # Create item
    todo_json = {
        "id": "autotest_todo2",
        "name": "Test TODO Name",
        "description": "Test TODO Description",
    }
    response = client.post("/todos", json=todo_json)
    # Check API response
    assert response.status_code == 200
    assert response.json()["id"] == todo_json["id"]
    assert response.json()["name"] == todo_json["name"]
    assert response.json()["description"] == todo_json["description"]
    assert not response.json()["done"]  # Test that value is false by default


def test_list_todo_item(client: TestClient, session: Session):
    # Get items list
    response = client.get("/todos")
    assert response.status_code == 200
    # here some assertions are missing, but not yet writed waiting to setup specific DB for testing


def test_update_todo_item(client: TestClient, session: Session):
    """Test delete_todo API endpoint."""
    # Create item
    todo_json = {
        "id": "autotest_todo2",
        "name": "Test TODO Name",
        "description": "Test TODO Description",
    }
    response = client.post("/todos", json=todo_json)

    # Update it afterwards
    update_todo_json = {
        "id": "autotest_todo2",
        "name": "Test TODO Name updated",
        "description": "Test TODO Description updated",
        "done": True,
    }
    response = client.put("/todos/autotest_todo2", json=update_todo_json)

    # Check API response
    assert response.status_code == 200
    assert response.json()["id"] == update_todo_json["id"]
    assert response.json()["name"] == update_todo_json["name"]
    assert response.json()["description"] == update_todo_json["description"]
    assert (
        response.json()["done"] == update_todo_json["done"]
    )  # Test that value has been updated to True


def test_delete_todo_item(client: TestClient, session: Session):
    """Test delete_todo API endpoint."""
    # Create item
    todo_json = {
        "id": "autotest_todo2",
        "name": "Test TODO Name",
        "description": "Test TODO Description",
    }
    response = client.post("/todos", json=todo_json)

    # Delete it afterwards
    response = client.delete("/todos/autotest_todo2")

    # Check API response
    assert response.status_code == 200
