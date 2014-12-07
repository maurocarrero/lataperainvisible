// LA TAPERA INVISIBLE _ SERVER

// dependencies
var http = require('http');
var helpers = require('./server/helpers.js');

var cache = {};

// server
var server = http.createServer(function (request, response) {
	var filePath = false;

	if (request.url === '/') {
		filePath = 'app/index.html';
	} else {
		filePath = 'app' + request.url;
	}
	var absPath = './' + filePath;
	helpers.serveStatic(response, cache, absPath);
});

server.listen(5000, function () {
	console.log('Server listening on port 5000.');
});