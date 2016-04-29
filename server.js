// server.js

// setup ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;

app.get('/',function(req,res){
    var ipaddress = req.ip;
    var language = req.headers['accept-language'].split(',')[0];
    var regExp = /\(([^)]+)\)/;
    var software = regExp.exec(req.headers['user-agent'])[1];
    res.json({
      ipaddress: ipaddress,
      language: language,
      software: software
    });
});
// launch ======================================================================
app.listen(port);
console.log('==> 🌎  Listening on port '+port);
