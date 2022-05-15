# Run the frontend app standalone

## Build/rebuild the image

```sh
cd /deployment_day_4_docker

docker build -t react_docker_demo .
```

## Run the frontend image -> container

```sh
docker run -p 3000:3000 react_docker_demo
```

# Run the backend app standalone

## Build/rebuild the image

```sh
cd /deployment_day_3_docker

docker build -t fast_api_docker_demo .
```

## Run the backend image -> container

```sh
docker run -p 8000:8001 fast_api_docker_demo
```

# Run both docker containers with Docker Compose

**Note: turn off all the other docker containers running in standalone mode above**

```sh
cd /deployment_day_4_docker

docker-compose up --build
```
