# Bootstrap Docker React

Bootstrap Docker React is a dockerized React application with npm and docker-compose deployment options, configured to enable:

* Application Testing
* Hot Module Reloading
* Multiple deployment configurations

This application supports Development and Staging deployment configurations to ease the transition to Production when the app is ready to go live. Setup tools are also included to make minor modifications specific to each individual application.

# System Requirements & Setup Instructions

`Docker` and `docker-compose` will need to be installed on your device globally for commands requiring docker-compose, while `npm` and `node` will need to be installed on your device globally for commands requiring npm. All scripts should be run from the application root folder.

## Installing the Application

Create an application folder, navigate inside, and clone to repository with `git clone`

## Setting Up the Application

Provides user terminal prompts to rename the package and provide a title to the application index.html

**Using docker-compose**

### `docker-compose -f docker-compose.dev.yml up -d setup && docker attach setup`

Runs the setup script. Because the setup script requires stdin access to the terminal, the container must be launched in detached mode and then attached so the terminl can connect to the setup container. 

**Using node**

### `npm install`

Installs the required npm packages.

### `node ./setup/setup.js`

Runs the setup script.

## Deploying the Application

Deploys the application visible at localhost:3000/

**Using docker-compose**

### `docker-compose -f docker-compose.dev.yml up app-dev`

Starts the application in development mode.

### `docker-compose -f docker-compose.staging.yml up app-staging`

Starts the application in staging mode using NGINX to serve the application.

**Note**: The build flag will have to be used if the service is not already built. Use the `--build` flag if the container doesn't already exist e.g. `docker-compose -f docker-compose.dev.yml up --build app-dev`. 

**Using npm**

### `npm run start`

## Testing the Application

**Using docker-compose**

### `docker-compose -f docker-compose.dev.yml up test`

Runs the Jest test runner.

### `docker-compose -f docker-compose.dev.yml up test-watch`

Runs the Jest test runner in watch mode so test's get re-run on application changes.

### `docker-compose -f docker-compose.dev.yml up test-coverage`

Runs the Jest test runner and generates a coverage report.

**Using npm**

### `npm run test`

Runs the Jest test runner.

### `npm run test:watch`

Runs the Jest test runner in watch mode so test's get re-run on application changes.

### `npm run test:coverage`

Runs the Jest test runner and generates a coverage report.

# Deployment Options

## Dev Environment

The Dev Environment uses the webpack dev server under the hood to serve the application. It supports hot module reloading and Jest testing using react testing library out of the box. 

**Supported Deployment Options**

* npm
* docker-compose

## Staging Environment

The Staging Environment uses NGINX to serve this application. As NGINX is required to be configured for the application, running this environment locally using npm is not supported.

**Supported Deployment Options**

* docker-compose

# Additional Details

**This application is configured with the following notable dependencies**

* webpack: for application bundling
* Babel: for JavaScript compiling, 
* Jest: the test runner
* react-testing-library: the testing library

# Next Steps

* Add support for multiple configurations (e.g. redux, routing)
* Add improvements to the index.html file location
