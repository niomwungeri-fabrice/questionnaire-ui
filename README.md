[![Maintainability](https://api.codeclimate.com/v1/badges/2d4e3b736a0334bcb8b7/maintainability)](https://codeclimate.com/github/niomwungeri-fabrice/questionnaire-ui/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/niomwungeri-fabrice/questionnaire-ui/badge.svg?branch=master)](https://coveralls.io/github/niomwungeri-fabrice/questionnaire-ui?branch=master)
[![Build Status](https://travis-ci.com/niomwungeri-fabrice/questionnaire-ui.svg?branch=master)](https://travis-ci.com/niomwungeri-fabrice/questionnaire-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Questionnaire (ReactJS App)
Crowd-source questions for a meetup. ​Questioner​​ helps the meetup organizer prioritize questions to be answered. Other users can vote on asked questions and they bubble to the top or bottom of the log.

## Getting Started(With Docker)
* Install [Docker](https://docs.docker.com/docker-for-mac/install/)
```sh
$ git clone https://github.com/niomwungeri-fabrice/questionnaire-ui.git
$ yarn
$ docker build -t <name of the image> .
$ docker run -it -p 3000:3000 <name of the image>
```

## Getting Started(Without Docker)
```sh
$ git clone https://github.com/niomwungeri-fabrice/questionnaire-ui.git
$ yarn
$ yarn start
```

## Tests
```sh
$ yarn test
$ yarn test:coverage
```

## Note
* Create a `.env` file and copy/paste the environment variables from the `.env_example` file that's already existent in the root project directory.
* Check out how to start the server of the application if you wish to run the app locally [questionnaire-web-api](https://github.com/niomwungeri-fabrice/questionnaire-api)

## Build with
- [ReactJS](https://reactjs.org/) - React is a JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - Redux is an open-source JavaScript library for managing application state.
- [Material UI](https://material-ui.com/) - React components for faster and easier web development. 