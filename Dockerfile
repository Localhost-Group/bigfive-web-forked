FROM node:14-alpine3.14

RUN apk add make nasm autoconf automake libtool dpkg pkgconfig libpng libpng-dev g++

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]