FROM node

# set working directory
WORKDIR /app

COPY . ./

RUN git clone https://github.com/kris-classes/restart.git
WORKDIR /app/restart/react_day_6/
RUN npm install
RUN npm run build
RUN npm install -g serve

ENTRYPOINT [ "serve", "-s", "build" ]