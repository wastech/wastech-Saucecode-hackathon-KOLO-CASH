require('express-async-errors')
// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();

const {errorHandler} = require('./src/middleware/errorHandlerMiddleware');
const initialize = require('./src/middleware/initializeMiddleware');


// view engine setup
initialize(app);
errorHandler(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


module.exports = app;
