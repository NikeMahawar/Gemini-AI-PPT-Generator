import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

# Set your Gemini API key
genai_api_key = "Set your Gemini API key"
genai.configure(api_key=genai_api_key)

class GeminiPro:
    def __init__(self):
        self.model_name = "models/gemini-1.5-flash"

    def chat_development(self, user_message):
        conversation = self.build_conversation(user_message)
        try:
            response = self.generate_assistant_message(conversation)
        except Exception as err:
            response = f"An error occurred: {str(err)}"
        return response

    def build_conversation(self, user_message):
        return [
            {"role": "system",
            "content": ("You are an expert in medical science with deep knowledge across various disciplines including clinical practice, research, and medical education. "
                        "You are tasked with creating detailed, content-rich PowerPoint slides on the requested topic. Each slide should be written as if you are presenting to an audience of medical students, professionals, or researchers. "
                        "Provide comprehensive information with full explanations, relevant examples, and up-to-date research where applicable. "
                        "Ensure the content is accurate, in-depth, and suitable for educational purposes. "
                        "only answer the material which are asked in the structure and do not use asteriks(**) for specifying anything. "
                        "Structure each slide with a title, detailed explanation in paragraph, and relevant keywords according to the content of the slide which will be used for image searching in adobe stock "
                        "The format of the response should be: Slide X: {Title} /n Content: /n {A detailed content rich paragraph which is on point for that particular topic of the slide in atleast 80-90 words} /n Keywords: {Provide a relevant keyword according to the content of the slide which will be used for image searching in adobe stock}. "
                        )},
            {"role": "user", "content": user_message}
        ]

    def generate_assistant_message(self, conversation):
        chat = genai.GenerativeModel(self.model_name).start_chat(history=[])
        response = chat.send_message(conversation[-1]['content'])  # Assuming a simple conversation structure
        return response.text

# Example usage
def chat_development(user_message):
    gemini_bot = GeminiPro()
    return gemini_bot.chat_development(user_message)
