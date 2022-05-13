# How does Docker work?

![](docker_md/how%20docker%20works.png)

![](docker_md/running%20docker.png)

![](docker_md/components%20of%20docker.png)

# Install Docker

Get the correct Docker version for your OS from [here](https://docs.docker.com/get-docker/)

![](docker_md/get%20docker.png)

# How do you use Docker

![](docker_md/use%20docker.png)

# To run the example

Make sure you see your Dockerfile below
```dockerfile
FROM python:3.8

# set working directory
WORKDIR /app

COPY . ./

RUN git clone https://github.com/kris-classes/restart.git
WORKDIR /app/restart/react_day_6/backend
RUN pip install --upgrade --no-cache-dir -r ./requirements.txt

ENTRYPOINT [ "uvicorn", "backend:app", "--host", "0.0.0.0", "--port", "8001"]
```

## Build your docker image, named `fast_api_docker_demo`
```sh
docker build -t fast_api_docker_demo .
```

![](docker_md/run%20docker%20build.png)  

## Run a container from the image you built in port 8001

```sh
docker run -p 8001:8001 fast_api_docker_demo 
```

You should be able to get a response back from `localhost:8001`

![](docker_md/local%20host%208001.png)  

## Try to map docker host 8001 into a different port `9999`

```sh
docker run -p 9999:8001 fast_api_docker_demo 
```

![](docker_md/port%209999.png)  