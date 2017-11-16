'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');

router
	.put('/perfil',function(req,res){
		console.log("entramos");
		dataModels.updateDataProfile(req.body, function(error,data){
			console.log("SI entramos  a actualizar");
		});
	})
	.get('/perfil',function(req,res){
		console.log("entramos a1");
		dataModels.getLibros(function(error,data){
			res.send(data);
		});
	})
	.get('/usuarios',function(req,res){
		console.log("entramos a");
		dataModels.getUserData(function(error,data){
			res.send(data);
		});
	});

module.exports = router;