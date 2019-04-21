var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');

var privateKey  = fs.readFileSync('keys/my.key', 'utf8');
var certificate = fs.readFileSync('keys/my.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var PORT = 80;
var SSLPORT = 443;

var app = express();
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

app.use(express.static(path.join(__dirname, 'static')));

httpServer.listen(PORT, function() {
  console.log('HTTP Server is running on: http://www.jiejiangzs.com/');
});

httpsServer.listen(SSLPORT, function() {
  console.log('HTTPS Server is running on: https://www.jiejiangzs.com/');
});

// var express = require('express');
// var path = require('path');
// var app = express();

// app.use(express.static(path.join(__dirname, 'static')));

// app.listen(4444, function() {
//  console.log('App listening at port 8080;');
// });