from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import json
import os

container_id: str = os.environ["CONTAINER_ID"]

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
    print(f"{container_id=}")
    with open("data.json") as json_file:
        data = json.load(json_file)
        return data


@app.post("/")
def save_items(items: List[dict]):
    print(f"{container_id=}")
    with open("data.json", "w") as outfile:
        json.dump(items, outfile)
