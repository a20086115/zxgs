var express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('keys/my.key', 'utf8');
var certificate = fs.readFileSync('keys/my.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var app = express();

var httpsServer = https.createServer(credentials, app);
var SSLPORT = 443;

httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

app.use(express.static(path.join(__dirname, 'static')));

// var express = require('express');
// var path = require('path');
// var app = express();

// app.use(express.static(path.join(__dirname, 'static')));

// app.listen(4444, function() {
//  console.log('App listening at port 8080;');
// });