from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="LifeOS API", version="0.1.0")


class TextInput(BaseModel):
    text: str


@app.get("/health")
def health_check():
    return {"status": "ok", "app": "LifeOS"}


@app.post("/items")
def create_item(item: TextInput):
    return {"received_text": item.text}
