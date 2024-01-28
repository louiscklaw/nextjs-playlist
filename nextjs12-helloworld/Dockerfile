# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18-buster

RUN mkdir -p /home/node
RUN chown 1000:1000 -R /home/node

ADD . /app
RUN chown 1000:1000 -R /app

WORKDIR /app
user 1000:1000

RUN npm i
RUN npm run build

ENTRYPOINT npm run start
