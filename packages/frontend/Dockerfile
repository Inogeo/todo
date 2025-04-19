# Image used for development purpose
FROM bitnami/node:latest as dev

# Set working directory
WORKDIR /app

# Copy file to directory
COPY . .

# Install dependencies
RUN yarn install

# Expose port
EXPOSE 5173

CMD ["yarn", "dev", "--host"]


# Image used to build sources
FROM dev AS build
RUN yarn build

# Image used to serve static frontend app
FROM bitnami/nginx:latest AS production
COPY --from=build /app/dist /app