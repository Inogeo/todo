from typing import Annotated

from api.database import SessionDep
from api.todo.models import TodoItem
from fastapi import APIRouter, HTTPException, Query
from sqlmodel import select

router = APIRouter()

@router.post('/')
def create_task(task: TodoItem, session: SessionDep = SessionDep) -> TodoItem:
    session.add(task)
    session.commit()
    session.refresh(task)
    return task

@router.get("/")
def list_tasks(
    session: SessionDep = SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[TodoItem]:
    tasks = session.exec(select(TodoItem).offset(offset).limit(limit)).all()
    return tasks

@router.get("/{task_id}")
def read_task(task_id: int, session: SessionDep = SessionDep) -> TodoItem:
    task = session.get(TodoItem, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="TodoItem not found")
    return task