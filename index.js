var express = require('express');
var app = express();
var server = require('http').Server(app);
var router = express.Router();
var bodyParser = require('body-parser');


server.listen(3001, () => {
    console.log('Servidor corriendo el en port 3001');
});