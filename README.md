# Intelligent-Chatbot
![Concept map (1)](https://github.com/geethagayathriv/Intelligent-Chatbot/assets/163413946/38d4e75f-51d0-47a9-ac14-9f1ece9cd17e)


This project implements an intelligent chatbot for SCORA, a cloud-based platform for creating, managing, and administering assessments. The chatbot uses web scraping, text processing, and AI to provide informative responses about SCORA's services.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)

## Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## Installation
```
pip install -r requirements.txt
```
1. Clone the repository:
```
git clone https://github.com/your-username/intelligent-chatbot-scora.git
```
```
cd Chatbot
```
2. Create a virtual environment (optional but recommended):
```
python -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```
3. Install the required packages:
```
pip install -r requirements.txt
```
4. Set up your environment variables:
Create a api key from [Fireworks.ai](https://fireworks.ai/api-keys) website .
add your Fireworks API key in .env file :
```
FIREWORKS_API_KEY=your_api_key_here
```
## Project Structure

- `web_crawler.py`: Scrapes data from the SCORA website
- `text_to_doc.py`: Processes and cleans the scraped text
- `prompt.py`: Defines the prompt template for the AI model
- `utils.py`: Main file that integrates all components and generates responses

## Usage

To run the chatbot, simply execute the `utils.py` file:
```
python utils.py
```
## Contributing

- Fork the repository
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request