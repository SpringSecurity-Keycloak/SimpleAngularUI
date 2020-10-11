FROM node:13.12.0-alpine As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . . 

RUN npm run heroku-postbuild 

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/SimpleAngularUI/ /usr/share/nginx/html

