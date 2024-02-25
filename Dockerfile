FROM node:18.17.1-alpine

WORKDIR /usr/src/mark-backend

COPY ./package.json ./

RUN npm install
COPY . .

EXPOSE 11000

CMD ["npm","run","start"]