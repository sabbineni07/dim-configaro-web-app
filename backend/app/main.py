from fastapi import FastAPI

from .models.requests import TextRequest
from .models.responses import SentimentResponse
from .crud.database import Base, engine
from .routers import posts

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(posts.router)


@app.get("/")
async def root():
  return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
  return {"message": f"Hello {name}"}


@app.post("/test-sentiment/", response_model=SentimentResponse)
async def analyze_sentiment(request: TextRequest):
  return SentimentResponse(sentiment=f"{request.text} - Test Sentiment",
                           confidence=2.1)
