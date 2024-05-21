# CREDIT: https://github.com/shren207/nextjs-docker-compose
# Dockerfile
FROM node:18-buster

RUN mkdir -p /home/node
RUN chown 1000:1000 -R /home/node

RUN mkdir -p /app/node_modules
RUN chown 1000:1000 -R /app/node_modules
RUN chmod 777 -R /app/node_modules

WORKDIR /app
user 1000:1000
