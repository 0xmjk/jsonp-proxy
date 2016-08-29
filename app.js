var request = require('request');
var express = require('express');

var app = express();
// this enables jsonp support
app.enable("jsonp callback");

app.get('/get', function(req, res){
    console.log(req.ip+" :"+req.query.url);
    res.header('Content-type','application/json');
    res.header('Charset','utf8'); 
    request(req.query.url, function(error, response, html) {
        res.send(req.query.callback + '(' + JSON.stringify({contents: html}) + ');');
    });
});

app.listen(8080);

