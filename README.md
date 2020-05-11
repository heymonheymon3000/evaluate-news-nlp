# Natural Language Processing

## Overview

This app is a web tool that allows users to run Sentiment Analysis on a phrase. Using an exciting api called Aylien. This tool can give us back pertinent information about the phrase, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express will be used for the webserver and routing, and webpack is the build tool of choice. The app has dev and prod environments, each with their own set of tools and commands.

## Getting started

Clone this repo.

### Step 1: Signup for an API key

You will need to go [here](https://developer.aylien.com/signup) to get Aylien credentials. Signing up will get you an API key. You will enter this API key information into the `sever/index.js` file.

### Step 2: Adding API credentials
Update the .env file in this directory `src/sever/`. Add your API_ID and API_KEY from Aylien.

`API_ID=################################`
`API_KEY=################################`


## Run project
Below shows how to run in development and production mode.
### run in development mode
To start the webpack dev server at port 8080

` $ npm run build-dev`

` $ npm run start`

### run in production mode
Generate the dist files and then start server at port 3000

` $ npm run build-prod`

` $ npm run start`

## Testing

Testing is done with Jest. To run test, use the command 

`npm run test`.