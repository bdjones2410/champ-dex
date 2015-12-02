var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var http = require('http').Sever(app);

app.use(express.static(__dirname + "/app"));

app.get('/', function(req, res){
  response.sendFile('app');
});



http.listen(port);
