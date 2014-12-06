var express = require('express');
var app = express();
var fs = require('fs');

require('newrelic');

app.use(express.logger());

app.get('/', function(request, response) {
	fs.readFile('index.html', function (error, html) {
		if (err) {
			throw err;
		}
		response.send(html);
	});  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});