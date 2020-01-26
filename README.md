# Project Introduction

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Node and Express Environemnt

In this project we are using Node and Express environemnts. Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.

The Express app instance should be pointed to the project folder with .html, .css, and .js files.

## Project Dependencies

The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

The body-parser package should be installed and included in the project.

## Local Server

Local server should be running and producing feedback to the Command Line through a working callback function.

# AYLIEN API steps:

## Step 1
Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. 

### Step 2: Install the SDK
Next you'll need to get the SDK. SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help you work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day. 

### Step 2
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

- [ ] Require the Aylien npm package
```
var aylien = require("aylien_textapi");
```

### Step 3:
Next we need to declare our API keys, which will look something like this:
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
