'use strict';
 var dataModels = require('./models');
 var dataLibro = require('../libros/models');
 // var dataLibro = require();
 // var dataLibro = require();

var socket = function(io){
	var usuario = io.of('/48674716');
	usuario.on('connection', function (socket) {


		setInterval(function(){
			dataModels.getNotificaciones(48674716,function(error,data){
				if(data.length > 0){
					var descripcion = data[0].descripcion;
					var categoria  = data[0].categoria;
					switch(categoria) {
					    case 'libro':
					        dataLibro.getLibro(data[0].id_ejemplar,function(error,data){
					        	var libro = {titulo:data[0].titulo,descripcion:descripcion,categoria :categoria,ruta_portada:data[0].ruta_portada,id_ejemplar:data[0].id_ejemplar,id_carrera:data[0].id_carrera};
					        	console.log("data:",libro);
					        	usuario.emit("notificacionUser",libro);
					        });
					        break;
					    case 'revista':
					        // code block
					        break;
					    case 'revista':
					    	// code block
					    	break;
					}
					dataModels.actuaNotificacion(data[0].id_notificacion,function(error,data){console.log("denis")});
				}
			});
		},3000);


	});

}

module.exports = socket;