FROM node:10
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 85

CMD [ "node", "server.js" ]
