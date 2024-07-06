from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
app=FastAPI()

class Message(BaseModel):
    message: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get('/')
async def root():
    return 'Hello world'

@app.post('/api/runQuery')
async def runQuery(message:Message):
    return {"id":1,"name":"abhitha"}