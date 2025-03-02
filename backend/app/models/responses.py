from pydantic import BaseModel


class SentimentResponse(BaseModel):
  sentiment: str
  confidence: float
