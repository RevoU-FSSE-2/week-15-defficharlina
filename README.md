

# REVOU ASSIGNMENT WEEK 15
This project is create an app use cors where client X, and client Y have different methods. Client X can only CREATE, client Y can EDIT and DELETE.

## CORS

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

## The requirements:
1. Have an x-request-id in the response header
2. Must have a CORS
3. Implement CORS preflight allow method where client X, and client Y have different methods
4. The app should be protected against common web vulnerabilities

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install cors
```

## Programming Language
JavaScript

JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language

## Development Process
1. Setup project with all required dependencies and i will use JavaScript
2. Create a simple frontend as a client, deploy project frontend with vercel
3. Create database book with table book name and author, next step deploy with MongoDB

#### Implement CORS


```sh
const origin = [
  "https://week15-defficharlina-fe.vercel.app",
  "https://week15-defficharlina.cyclic.app",
];
const partnerOrigin = [
  "https://week15.avicena.dev",
  "https://week-15-mnajmytsss.vercel.app",
];
```
