'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');

router.get('/reservas', function (req,res){
	console.log("aloja");
	dataModels.getReservas(function(error,data){
		res.send(data);
	});
});


module.exports=router;

