FROM node:20-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build 

FROM node:20-alpine as production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 4000

CMD ["node", "dist/server.js"]