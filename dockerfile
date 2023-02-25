# syntax=docker/dockerfile:1

FROM node:19-alpine

# Create app directory
WORKDIR /usr/src/app

# Install packages
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]