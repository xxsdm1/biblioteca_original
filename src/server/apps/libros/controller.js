'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');


router.get('/libros/:idLibro',function(req,res){
	var idLibro =  req.params.idLibro;
	dataModels.getLibro(idLibro,function(error,data){
		res.send(data);
	});
});
router.get('/libros',function(req,res){
	dataModels.getLibros(function(error,data){
		res.send(data);
	});
	
});

router.post('/libros',function(req,res){
	dataModels.reservar(req.body,function(error,data){
		res.send("data");
	});
});
router.post('/comentarios',function(req,res){
	var idLibro = req.body.idLibro;
	dataModels.getComentarios(idLibro,function(error,data){
		res.send(data);
	});
});
router.post('/comentar',function(req,res){
	dataModels.insertComentario(req.body,function(error,data){
		res.send(data);
	});
});

router.get('/carreras',function(req,res){
	dataModels.getCarreras(function(error,data){
		res.send(data);
	});
});



module.exports = router;