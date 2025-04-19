[![codecov](https://codecov.io/github/Inogeo/todo/branch/main/graph/badge.svg?token=80LNS629RT)](https://codecov.io/github/Inogeo/todo)

# TODO App

This app is a demo app to show up my programming skills.

# Start in development

## Backend App

To start backend API server, use the following commands:

```sh
# Go into package folder
cd package/api

# Start virtual env
eval $(poetry env activate)

# install dependencies
poetry install

# run server
cd src/api
poetry start

```

## Frontend App

### Start app in development mode

To start frontend app in development mode, use the following commands:

```sh
# Go to frontend app folder
cd package/frontend

# Install dependencies
yarn install

# Install browser used for testing
yarn run playwright install chromium

# Start in development
yarn dev
```

Once started, application can be reached at [http://localhost:5173](http://localhost:5173)

### Run tests

```sh
# Open browser and show up vitest report
yarn vitest --ui
```