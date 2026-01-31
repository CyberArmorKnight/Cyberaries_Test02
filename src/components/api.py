from fastapi import FastAPI

app = FastAPI()

@app.get("/api/students/?")
async def get_students():
    return {"students": ["Alice", "Bob", "Charlie"]}

reat=ct basics, js basic and different kinds of fns and when to use what

in react-go through redux