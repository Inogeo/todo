"""Setup SQLite for data peristence (but in production a separate service such as PostgreSQL server would be prefered)"""

import logging
from typing import Annotated
from fastapi import Depends
from sqlmodel import Session, SQLModel, create_engine

logger = logging.getLogger(__name__)

sqlite_file_name = "/data/database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]
