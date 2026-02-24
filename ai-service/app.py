from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class InputData(BaseModel):
    text: str

@app.post("/analyze")
def analyze(data: InputData):
    if "help" in data.text.lower():
        return {"risk_level": "HIGH"}
    return {"risk_level": "LOW"}