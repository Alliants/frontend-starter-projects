# Webpack React Starter Project

## Initial Setup
Requires **node** and **npm**, specifically node version `5.3.0`, you can use
[NVM](https://github.com/creationix/nvm) to manage node versions on your machine.

Run `npm install` to install all dependancies listed in `package.json`

## Running the dev-server
The project uses webpack and webpack-dev-server for development environment, a script tasks exists in the `package.json` to start this, from the terminal run:
`npm start` and load `http://localhost:8080` in your browser.
Making changes should hot reload JS files and reload CSS files without the need to refresh the browser.

## Building
Run `npm run build` to build the babylon webapp, this will create all the necessary files in a directory: `./dist`.

## Testing
`npm run test` to run unit tests.
`npm run test:watch` to run unit tests and watch for changes.
`npm run test:coverage` to get a test coverage report.
`npm run test:ci` will run both the tests and coverage, configured to run on CI server.
