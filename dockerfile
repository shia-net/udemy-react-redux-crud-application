FROM node:latest
WORKDIR /usr/src/app

RUN npm install -g create-react-app
RUN npm install -g redux
RUN npm install -g react-redux
