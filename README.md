# TODO App

[![codecov](https://codecov.io/github/Inogeo/todo/branch/main/graph/badge.svg?token=80LNS629RT)](https://codecov.io/github/Inogeo/todo)

# Start in development

## Backend App


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