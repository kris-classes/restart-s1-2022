from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import json

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def get_items():
    with open("data.json") as json_file:
        data = json.load(json_file)
        return data


@app.post("/")
def save_items(items: List[str]):
    with open("data.json", "w") as outfile:
        json.dump(items, outfile)
