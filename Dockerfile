FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npx", "ts-node", "app.ts" ]
# CMD [ "npm", "start" ]