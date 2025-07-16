from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.ai_service import get_gemini_response
from utils.parser import parse_gemini_response


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust this to your frontend's URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PromptRequest(BaseModel):
    prompt: str

@app.post("/optimize")
async def optimize_prompt(request: PromptRequest):
    original_content = request.prompt

    original_prompt = f"""
    You are an expert LinkedIn content analyst.
    Analyze the following LinkedIn post for its potential engagement (likes, comments, shares).
    Provide a prediction score from 0 to 100, where 0 is very low engagement and 100 is extremely high.
    Also, provide a brief, one-sentence reason for the score.
    Output your response as a JSON object with two fields: "prediction" (integer) and "reason" (string).

    LinkedIn Post to Analyze:
    {repr(original_content)}
    """

    original_response_text = await get_gemini_response(original_prompt)
    original_data = parse_gemini_response(original_response_text)

    optimized_prompt = f"""
    You are an expert LinkedIn content strategist.
    Your goal is to transform the given LinkedIn post into a highly engaging version.
    Apply best practices for LinkedIn, including:
    - Catchy headline/first line
    - Clear value proposition
    - Use of emojis (sparingly, if appropriate)
    - Strategic use of 3-5 relevant and high-performing hashtags
    - A strong call to action or question to encourage interaction
    - Maintain professional but engaging tone.
    - Ensure good readability.

    After optimizing the post, predict its new engagement score from 0 to 100, considering your improvements.
    Output your response as a JSON object with two fields: "optimized_post" (string) and "optimized_prediction" (integer).JSON object, without any Markdown formatting or extra text.

    Original LinkedIn Post:
    "{original_content}"
    """

    optimized_response_text = await get_gemini_response(optimized_prompt)
    optimized_data = parse_gemini_response(optimized_response_text)

    return {
        "original_prediction": original_data.get("prediction", 0),
        "original_reason": original_data.get("reason", "N/A"),
        "optimized_post": optimized_data.get("optimized_post", ""),
        "optimized_prediction": optimized_data.get("optimized_prediction", 0),
    }