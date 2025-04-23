from fastapi import FastAPI
from .routers import todo

# Instanciate main FastAPI app
app = FastAPI(
    title="Todo List API",
    description="An API to persist a TODO List data",
)

# Include routes to apps
app.include_router(todo.router, prefix="/todo", tags=["Todo Items"])

# Root URL declaration used as an healthcheck 
@app.get("/")
async def healthcheck():
    """Root URL used as healthcheck.

    Returns:
        dict: Dict containing healthcheck message.
    """
    return {"message": "Healthcheck OK"}