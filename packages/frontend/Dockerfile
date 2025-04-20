# Image used for development purpose
FROM bitnami/node:latest AS dev

# Set working directory
WORKDIR /app

# Copy package.json
COPY yarn.lock package.json ./
COPY yarn.lock yarn.lock

# Install dependencies with buildkit cache
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

# Install playwright dependencies required for testing
RUN yarn playwright install-deps
RUN yarn run playwright install chromium

# Copy whole sources
COPY . .

# Expose port
EXPOSE 5173

# Command to run in development
CMD ["yarn", "dev"]

# Image used to build sources
FROM dev AS build
RUN yarn build

# Image used to serve static frontend app
FROM bitnami/nginx:latest AS production
COPY --from=build /app/dist /app