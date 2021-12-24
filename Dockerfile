## Stage one 'Building the blog'
FROM node:lts AS builder

COPY ./package*.json ./

RUN npm install --production

WORKDIR /usr/app

COPY ./ ./

RUN npm run build


## Stage two 'Serving the blog'
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

COPY ./nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/app/out /usr/share/nginx/html

EXPOSE 3000 80

CMD ["nginx", "-g", "daemon off;"]
