FROM node:lts

WORKDIR /srv/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "node", "build/index.js"]
