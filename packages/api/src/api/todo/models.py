from sqlmodel import Field, SQLModel

class TodoItem(SQLModel, table=True):
    id: str | None = Field(primary_key=True, nullable=False)
    name: str = Field(index=True)
    description: str = Field(index=True)
    done: bool = Field(index=True)
