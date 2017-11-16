'use strict';
var express = require('express'),
	router = express.Router();
var	dataModels = require('./models');

// router.post('/login',function(req,res){
	
// });
router.post('/notificaciones',function(req,res){
	dataModels.postNotificaciones(req.body.idUser,function(error,data){
		res.send(data);
	});
});



module.exports = router;