
# TODO App

This app is a demo app to show up my programming skills.

Check-out the current coverage reports:
[![codecov](https://codecov.io/github/Inogeo/todo/branch/main/graph/badge.svg?token=80LNS629RT)](https://codecov.io/github/Inogeo/todo)

# Start with production-like images

To start the app with production-like images, run the following commands

```sh
# Build container images
docker compose -f docker-compose.production.yml build

# Execute in development mode
docker compose -f docker-compose.production.yml up -d
```

After docker started, make sure that the following ports are forwarded on the machine you use for testing (with web brower):
- Port `8000` : is the main entrypoint for the web app served

Once startup is complete, you should be able to reach the app here: [http://localhost:8000/](http://localhost:8000/)

# Start in development (With Docker, recommended)

With this approach, you must have [Docker](https://docs.docker.com/get-started/get-docker/) installed.

Once Docker is installed, you can build and execute the whole sources with the following command:

```sh
# Build container images
docker compose build

# Execute in development mode
docker compose up -d
```

After docker started, make sure that the following ports are forwarded on the machine you use for testing (with web brower):
- Port `8000` : is the main entrypoint for the web app served 
- Port `5173` : is the endpoint for websockets required for Vite HMR (hot-reload).

Once startup is complete, you should be able to reach the app here: [http://localhost:8000/](http://localhost:8000/)

To run tests, you can use the following approaches:

1. Backend tests: This section is under construction

2. Frontend tests:

```sh
# open a terminal in todo_frontend container
docker exec -it todo_frontend /bin/bash

# in this terminal, run tests
yarn test

```
NOTE: Frontend tests can also be ran with vitest web browser report experimental feature, but this does not work with Docker approach

# Start in development (Without Docker)

This approach is not recommended because it is not reproducting the way the app operates in a containerized environnment.
However, for specials needs, the documentation below can be used.

## Backend App

The backend App is based on FastAPI. It relies on a SQLite database to save its data.

You must have the follwing installed before you get started:
- [`python`](https://www.python.org/downloads/)
- [`poetry`](https://python-poetry.org/docs/#installation)

To reproduce the way the app stores the database, you must create a /data folder prior starting the app:

```sh
# Create a /data folder with write permission given to current user
sudo mkdir -p /data
USER=$(whoami) && sudo chown $USER /data
```

To start backend API server, use the following commands:

```sh
# Go into package folder
cd packages/api

# Start virtual env
eval $(poetry env activate)

# install dependencies
poetry install

# run server
fastapi dev src/api/main.py

```

Once started, you should be able to reach the API swagger documentation at [http://localhost:8000/docs](http://localhost:8000/docs)

## Frontend App

### Start app in development mode

The frontend App is based on ViteJS with React + TypeScript template provided by Vite.
It relies on Material UI for components and Redux for Global State Management.

Prerequisites: You must have installed the following apps on your system before you get started.
- [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

To start frontend app in development mode, use the following commands:

```sh
# Go to frontend app folder
cd packages/frontend

# Install dependencies
yarn install

# Install playwright chromium browser (used for testing)
yarn playwright install-deps # may require sudo0
yarn run playwright install chromium

# Start in development
yarn dev
```

Once started, application can be reached at [http://localhost:5173](http://localhost:5173)

### Run tests

```sh
# Open browser and show up vitest report
yarn test-ui
```