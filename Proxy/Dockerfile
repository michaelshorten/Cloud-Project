FROM node:10
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 100
CMD [ "node", "main.js" ]
