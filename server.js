// LA TAPERA INVISIBLE _ SERVER

// dependencies
var http = require('http');
var socketio = require('socket.io');
var helpers = require('./server/helpers.js');
var chatServer = require('./server/chat_server.js');

var cache = {};
var io;
var guestNumber = 1;
var nickNames = {};
var namesUser = [];
var currentRoom = {};

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

chatServer.listen(server);


server.listen(5000, function () {
	console.log('Server listening on port 5000.');
});

