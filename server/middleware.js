var bodyParser = require('body-parser');
var morgan = require('morgan');
var express = require('express');

module.exports = function (app) {
  'use strict';
  app.use(bodyParser());
  app.use(morgan('dev'));
  app.use(express.static(__dirname + "/../client"));

  var userRouter = express.Router();

  app.get('/', function (req, res) {
    res.sendFile('index.html');
  });
  
  app.use('/api/users', userRouter);

  
  require('./users/userRouter')(userRouter);
};
