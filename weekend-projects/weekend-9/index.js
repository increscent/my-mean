var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var models = require('./models.js');

// set up middleware to parse the request body
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/movie', require('./movie_resource.js'));

app.listen(1984);