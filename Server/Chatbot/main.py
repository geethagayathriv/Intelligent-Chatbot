from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from web_crawler import get_data_from_website
from text_to_doc import get_doc_chunks
from prompt import get_prompt
from langchain_fireworks import ChatFireworks
from langchain_core.messages import HumanMessage, SystemMessage
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# SCORA-specific information
SCORA_INFO = {
    "organization_name": "SCORA",
    "organization_info": "SCORA is a cloud-based platform for creating, managing, and administering assessments.",
    "contact_info": """Email: hello@scora.io
Phone: +91 8884945100
Raise a query: https://scora.io/contact/"""
}

# Initialize data
def initialize_data():
    url = "https://scora.io/"
    text_content, metadata = get_data_from_website(url)
    doc_chunks = get_doc_chunks(text_content, metadata)
    return "\n".join([chunk.page_content for chunk in doc_chunks])

context = initialize_data()

class ChatRequest(BaseModel):
    question: str

def generate_response(system_prompt, user_question):
    api_key = os.getenv("FIREWORKS_API_KEY")
    chat = ChatFireworks(api_key=api_key, 
                         model="accounts/fireworks/models/llama-v3-70b-instruct",
                         max_tokens=8192,
                         temperature=0)

    system_message = SystemMessage(content=system_prompt)
    human_message = HumanMessage(content=user_question)
    response = chat.invoke([system_message, human_message])
   
    generated_response = response.content
    return generated_response

def get_response(question, organization_name, organization_info, contact_info, chat_history):
    prompt = get_prompt()
    
    # Convert chat history to string
    chat_history_str = "\n".join(chat_history)
    
    # Format the prompt with provided context and information
    formatted_prompt = prompt.format_prompt(
        context=context,
        question=question,
        chat_history=chat_history_str,
        organization_name=organization_name,
        organization_info=organization_info,
        contact_info=contact_info
    )
    formatted_prompt_str = str(formatted_prompt)  
    
    # Generate the AI response
    response = generate_response(formatted_prompt_str, question)
    
    # Update chat history with the new question and response
    new_entry = f"Human: {question}\nAI: {response}"
    chat_history = manage_chat_history(chat_history, new_entry)
    
    return response, chat_history

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        response = get_response(request.question)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def read_root():
    return {"message": "Welcome to the SCORA chatbot API. Use /docs to interact with the bot."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)