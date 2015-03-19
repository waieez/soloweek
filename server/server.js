var express = require('express');
var app = express();

require('./middleware')(app);

module.exports = app;