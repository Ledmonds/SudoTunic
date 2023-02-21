# syntax=docker/dockerfile:1

FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install packages
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]