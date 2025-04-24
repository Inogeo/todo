from typing import Annotated

from api.database import SessionDep
from api.todo.models import TodoItem
from fastapi import APIRouter, HTTPException, Query
from sqlmodel import select

router = APIRouter()


@router.post("/")
def create_todo_item(todo_item: TodoItem, session: SessionDep = SessionDep) -> TodoItem:
    """This API endopints create TodoItem instances."""
    session.add(todo_item)
    session.commit()
    session.refresh(todo_item)
    return todo_item


@router.get("/")
def list_todo_items(
    session: SessionDep = SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[TodoItem]:
    """This API endopints lists TodoItem instances."""
    todo_items = session.exec(select(TodoItem).offset(offset).limit(limit)).all()
    return todo_items


@router.put("/{todo_item_id}")
def update_todo_item(
    todo_item_id: str, todo_item_update: TodoItem, session: SessionDep = SessionDep
) -> TodoItem:
    """This API endopints update a single TodoItem instance."""
    # Get object to update
    todo_item = session.get(TodoItem, todo_item_id)

    # Update object attributes
    todo_item.name = todo_item_update.name
    todo_item.description = todo_item_update.description
    todo_item.done = todo_item_update.done

    return todo_item


@router.get("/{todo_item_id}")
def read_todo_item(todo_item_id: str, session: SessionDep = SessionDep) -> TodoItem:
    """This API endopints retrive a single TodoItem instance."""
    todo_item = session.get(TodoItem, todo_item_id)
    if not todo_item:
        raise HTTPException(status_code=404, detail="TodoItem not found")
    return todo_item


@router.delete("/{todo_item_id}")
def delete_todo_item(todo_item_id: str, session: SessionDep = SessionDep) -> TodoItem:
    """This API endopints deletes a single TodoItem instance."""
    todo_item = session.get(TodoItem, todo_item_id)
    # If item not found, raise 404
    if not todo_item:
        raise HTTPException(status_code=404, detail="TodoItem not found")

    # Delete item
    session.delete(todo_item)
    session.commit()
    return todo_item
