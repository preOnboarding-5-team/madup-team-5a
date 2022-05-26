FROM node

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install -y

COPY . .

EXPOSE 3030

CMD [ "yarn", "dev" ]