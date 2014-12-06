var express = require('express');
var app = express();
var newrelic = require('newrelic');

// EXPRESS SERVER
app.use(express.logger());
app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});