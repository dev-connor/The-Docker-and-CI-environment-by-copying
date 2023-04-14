FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
RUN npm install -g nodemon

COPY ./ ./

CMD ["nodemon", "server.js"]