FROM bitnami/node:latest

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 5173

CMD ["yarn", "dev", "--host"]