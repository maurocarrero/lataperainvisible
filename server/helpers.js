var fs = require('fs');
var mime = require('mime');
var path = require('path');

var helpers = (function () {

	var service = {

		send404: function (response) {
			response.writeHead(404, { 'Content-Type': 'text/plain' });	
			response.write('Error 404: Resource not found');
			response.end();
		},

		sendFile: function (response, filePath, fileContents) {
			response.writeHead(200, {
				'Content-Type': mime.lookup(path.basename(filePath))
			});
			response.end(fileContents);
		},

		serveStatic: function (response, cache, absPath) {
			if (cache[absPath]) {
				service.sendFile(response, absPath, cache[absPath]);
			} else {
				fs.exists(absPath, function (exists) {
					if (exists) {
						fs.readFile(absPath, function (err, data) {
							if (err) {
								send404(response);
							} else {
								cache[absPath] = data;
								service.sendFile(response, absPath, data);
							}
						});
					} else {
						send404(response);
					}
				});
			}
		}
	};
	
	return service;

})();

module.exports = helpers;