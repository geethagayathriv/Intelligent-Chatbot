from langchain.llms import fireworks
from prompt import get_prompt
from langchain_fireworks import ChatFireworks
from langchain_core.messages import HumanMessage, SystemMessage
from web_crawler import get_data_from_website
from text_to_doc import get_doc_chunks
from dotenv import load_dotenv
import os 

load_dotenv()

def initialize_data():
    url = "https://scora.io/"  
    text_content, metadata = get_data_from_website(url)
    doc_chunks = get_doc_chunks(text_content, metadata)
    return "\n".join([chunk.page_content for chunk in doc_chunks])

context = initialize_data()

def generate_response(system_prompt, user_question):
    api_key = os.getenv("FIREWORKS_API_KEY")
    chat = ChatFireworks(api_key=api_key, 
                    model="accounts/fireworks/models/llama-v3-70b-instruct",
                    max_tokens=4096)

    system_message = SystemMessage(content=system_prompt)
    human_message = HumanMessage(content=user_question)
    response = chat.invoke([system_message, human_message])
   
    generated_response = response.content
    return generated_response


def get_response(question, organization_name, organization_info, contact_info):
    prompt = get_prompt()
    formatted_prompt = prompt.format_prompt(
        context=context,
        question=question,
        chat_history="",
        organization_name=organization_name,
        organization_info=organization_info,
        contact_info=contact_info
    )
    formatted_prompt_str = str(formatted_prompt)  
    response = generate_response(formatted_prompt_str, question)
    return response

def main():
    # Example usage
    question = "What assessments are available on SCORA?"
    organization_name = "SCORA"
    organization_info = "SCORA is a cloud-based platform for creating, managing, and administering assessments."
    contact_info = "You can contact SCORA support at support@scora.io."

    response = get_response(question, organization_name, organization_info, contact_info)
    print(response)

if __name__ == "__main__":
    main()