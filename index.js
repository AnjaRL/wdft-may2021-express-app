console.log('Node works beautifully :) ')

// ------------------------------------------------------
//                    CHALK
// ------------------------------------------------------

/*
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

console.log(chalk.blue.bgRed.bold('Hello world!'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));
*/

// ------------------------------------------------------
//            FAKER ACTIVITY
// ------------------------------------------------------

/*
var faker = require('faker');

for (let i = 0; i< 10; i++) {
    console.log( faker.commerce.productName() , faker.commerce.price()) 
}
*/

// ------------------------------------------------------
//            CREATING A SERVER IN NODE
// ------------------------------------------------------

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// ------------------------------------------------------
//                       EXPRESS
// ------------------------------------------------------


const express = require('express')
const app = express() //creating the app object

// Creating the middleware
app.use((req, res, next) => {
    console.log('In the middleware! ')
    //allows the request to proceed to the next available function
    next()
})

// Setting up the middleware to tell express where to find the static files
app.use( express.static(__dirname + '/public') )
 

// ------------------------------------------------------
//                 CREATING ROUTES
// ------------------------------------------------------

// handling all GET requests to 127.0.0.1:3000/
app.get('/' , ( req, res ) => {
    res.sendFile(__dirname + '/views/landing.html')
})

// handling all GET requests to 127.0.0.1:3000/about
app.get('/about' , ( req, res ) => {
    res.sendFile(__dirname + '/views/about.html')
})

// handling all GET requests to 127.0.0.1:3000/home
app.get('/home', (ihreq, ihres) => {
    ihres.sendFile(__dirname + '/views/home.html')
})

app.listen(3000)