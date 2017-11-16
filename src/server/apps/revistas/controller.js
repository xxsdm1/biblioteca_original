'use strict';
'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');

router.get('/revistas/:idRevista',function(req,res){
	var idRevista =  req.params.idRevista;
	dataModels.getRevista(idRevista,function(error,data){
		res.send(data);
	});
});
router.get('/revistas',function(req,res){
	dataModels.getRevistas(function(error,data){
		res.send(data);
	});
});

router.post('/revistas',function(req,res){
	dataModels.reservar(req.body,function(error,data){
		res.send("data");
	});
});
router.post('/comentarios/revistas',function(req,res){
	var idLibro = req.body.idRevista;
	dataModels.getComentarios(idLibro,function(error,data){
		res.send(data);
	});
});
router.post('/comentar/revista',function(req,res){
	dataModels.insertComentario(req.body,function(error,data){
		res.send(data);
	});
});





module.exports = router;