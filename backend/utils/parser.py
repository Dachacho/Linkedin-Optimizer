from http.client import HTTPException
import json

def parse_gemini_response(response: str):
    try:
        json_start = response.index("{")
        json_end = response.rindex("}") + 1
        json_str = response[json_start:json_end]
        return json.loads(json_str)
    except json.JSONDecodeError as e:
        raise HTTPException(status_code=500, detail=f"Error decoding Gemini response: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error parsing Gemini response: {str(e)}") 