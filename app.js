/*
My porfolio from my masters in information management and systems at UC Berkeley
Vikram Reddy
Dec 15, 2016
*/

// imports
var express = require('express');
var mustache_express = require('mustache-express');
var body_parser = require('body-parser');
var request = require('request');

var app = express();
app.engine('html', mustache_express());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('index.html');
	console.log('index is up!')
});

app.get('/index', function(req, res) {
	res.render('index.html');
});

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('The server is running on localhost at port ' + port);
});
