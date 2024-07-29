from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from utils import get_response, initialize_data
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# SCORA-specific information
SCORA_INFO = {
    "organization_name": "SCORA",
    "organization_info": "SCORA is a cloud-based platform for creating, managing, and administering assessments.",
    "contact_info": """Email: hello@scora.io
Phone: +91 8884945100
Raise a query: https://scora.io/contact/"""
}

# Initialize data and chat history
context = initialize_data()
chat_history = []

class ChatRequest(BaseModel):
    question: str

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    global chat_history
    try:
        response, chat_history = get_response(
            request.question,
            SCORA_INFO["organization_name"],
            SCORA_INFO["organization_info"],
            SCORA_INFO["contact_info"],
            chat_history
        )
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def read_root():
    return {"message": "Welcome to the SCORA chatbot API. Use /docs to interact with the bot."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)