var bodyParser = require('body-parser');
var morgan = require('morgan');
var express = require('express');

module.exports = function (app) {
  'use strict';
  app.use(bodyParser());
  app.use(morgan('dev'));
  app.use(express.static(__dirname + "/../client"));

  app.get('/', function (req, res) {
    res.sendFile('index.html');
  });
};
