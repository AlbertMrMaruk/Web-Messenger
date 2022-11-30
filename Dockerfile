FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /var/www
COPY . .
RUN cd /var/www && npm i
RUN npm run build:webpack
EXPOSE 3000
CMD node server.js
