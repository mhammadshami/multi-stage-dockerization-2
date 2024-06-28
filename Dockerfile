FROM node:alpine as base

FROM base as development
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY ./src ./src
COPY ./.env ./
COPY ./config.js ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base as production
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install --only=production
COPY ./src ./src
COPY ./.env ./
COPY ./config.js ./
EXPOSE 3000
CMD ["npm", "start"]