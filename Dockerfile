FROM node:23.10.0

RUN mkdir -p /app

WORKDIR /app

ADD . /app

RUN npm install -g dotenv-cli

RUN npm install

EXPOSE 4000 4000

CMD ["npm", "run", "start:docker"]