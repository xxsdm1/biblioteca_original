var express = require('express');
var http = require("http");
var app = express();
var bodyparser = require('body-parser');
var htttp = require('http');
var routes;
var server = htttp.Server(app);


app.use(bodyparser.urlencoded({extended: true,}));
app.use(bodyparser.json());

app.use('/',express.static('./src/client/'));
app.use('/',express.static('./node_modules/'));

require('./routers')(app,server);

server.listen(4000);

console.log("Servidor escuchando al puerto 4000");