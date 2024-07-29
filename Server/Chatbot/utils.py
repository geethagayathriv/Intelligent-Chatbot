from langchain.llms import fireworks
from prompt import get_prompt
from langchain_fireworks import ChatFireworks
from langchain_core.messages import HumanMessage, SystemMessage
from web_crawler import get_data_from_website
from text_to_doc import get_doc_chunks
from dotenv import load_dotenv
import os 

# Load environment variables from a .env file
load_dotenv()

# SCORA-specific information
SCORA_INFO = {
    "organization_name": "SCORA",
    "organization_info": "SCORA is a cloud-based platform for creating, managing, and administering assessments.",
    "contact_info": """Email: hello@scora.io
Phone: +91 8884945100
Raise a query: https://scora.io/contact/"""
}

# Function to initialize data by scraping content from a website
def initialize_data():
    url = "https://scora.io/"  
    text_content, metadata = get_data_from_website(url)
    doc_chunks = get_doc_chunks(text_content, metadata)
    return "\n".join([chunk.page_content for chunk in doc_chunks])

# Function to generate a response using the Fireworks model
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

# Function to manage chat history, keeping only the latest entries
def manage_chat_history(chat_history, new_entry, max_entries=10):
    chat_history.append(new_entry)
    if len(chat_history) > max_entries:
        chat_history = chat_history[-max_entries:]
    return chat_history

# Function to get a response for a user question and update chat history
def get_response(question, organization_name, organization_info, contact_info, chat_history):
    prompt = get_prompt()
    context = initialize_data()  # Get fresh context for each request
    
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

# Main function for testing
def main():
    chat_history = []

    while True:
        question = input("Enter your question (or 'quit' to exit): ")
        if question.lower() == 'quit':
            break

        response, chat_history = get_response(
            question,
            SCORA_INFO["organization_name"],
            SCORA_INFO["organization_info"],
            SCORA_INFO["contact_info"],
            chat_history
        )
        print("AI:", response)

if __name__ == "__main__":
    main()