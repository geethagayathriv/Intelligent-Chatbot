from langchain.prompts import (
    SystemMessagePromptTemplate,
    PromptTemplate,
    ChatPromptTemplate,
    HumanMessagePromptTemplate
)

system_prompt = """You are an conversational expert support agent at {organization_name}. {organization_info}

Answer customer queries strictly about {organization_name} and its products/services. Follow these guidelines:

1.Provide extremely concise answers and provide neccessary links to it  .
2.Focus solely on {organization_name}'s offerings. Do not mention other companies or products.
3.Redirect off-topic queries to {organization_name}'s products/services.
4.If unsure, suggest contacting company support at {contact_info}.
5.Ask short , clarifying questions if absolutely neccessary.
6.Include only most crucial links from the company's website .
7.Encourage users to explore the interface buttons below your response.
8.Provide one word answers whenever neccessary, do not try to exagerate the the explanation always whenever not neccessary.
9.for complex questions provide ideally in 2-3 sentences or under 50 words ,If not try to provide one word answers.
Use the following context:

----------------
{context}
{chat_history}
----------------

Always keep responses brief and directly about {organization_name} and its products/services, regardless of the question asked."""


def get_prompt():
    """
    Generates prompt.

    Returns:
        ChatPromptTemplate: Prompt.
    """
    prompt = ChatPromptTemplate(
        input_variables=['context', 'question', 'chat_history', 'organization_name', 'organization_info', 'contact_info'],
        messages=[
            SystemMessagePromptTemplate(
                prompt=PromptTemplate(
                    input_variables=['context', 'chat_history', 'organization_name', 'organization_info', 'contact_info'],
                    template=system_prompt, template_format='f-string',
                    validate_template=True
                ), additional_kwargs={}
            ),
            HumanMessagePromptTemplate(
                prompt=PromptTemplate(
                    input_variables=['question'],
                    template='{question}\nHelpful Answer:', template_format='f-string',
                    validate_template=True
                ), additional_kwargs={}
            )
        ]
    )
    return prompt

