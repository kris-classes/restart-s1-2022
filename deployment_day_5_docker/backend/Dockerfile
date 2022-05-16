FROM python:3.8

# set working directory
WORKDIR /app

COPY . ./

RUN git clone https://github.com/kris-classes/restart.git
WORKDIR /app/restart/react_day_7/backend
RUN pip install --upgrade --no-cache-dir -r ./requirements.txt

ENTRYPOINT [ "uvicorn", "backend:app", "--host", "0.0.0.0", "--port", "8001"]