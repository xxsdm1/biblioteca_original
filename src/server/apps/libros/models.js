'use strict';
var mysql = require('../../config/mysql');

var connection=mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'biblioteca_db',
   port: 3306
});



var dataModels ={
	getLibros : function(callback){
		 if(connection)
		{	
			var sql ='SELECT*FROM c_libro  INNER JOIN c_ejemplar  ON c_libro.id_libro = c_ejemplar.id_ejemplar INNER JOIN c_autores ON c_ejemplar.id_autor = c_autores.id_autor ';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	getLibro: function(idEjemplar,callback){
		 if(connection)
		{
			var sql ='SELECT*FROM c_ejemplar INNER JOIN c_libro ON c_ejemplar.id_ejemplar = c_libro.id_libro INNER JOIN c_autores ON c_ejemplar.id_autor = c_autores.id_autor where c_ejemplar.id_ejemplar ='+connection.escape(idEjemplar)+'';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	reservar : function(reserva,callback){
		 if(connection)
		{

			var sql ='INSERT INTO c_prestamo(id_usuario,id_ejemplar) VALUES('+connection.escape(reserva.id_usuario)+','+ connection.escape(reserva.id_ejemplar)+')';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	getComentarios : function(idLibro,callback){
		 if(connection)
		{
			var sql ='SELECT c_comentarios.*,c_usuario.nombres,c_usuario.ap_paterno,c_usuario.ap_materno FROM c_comentarios,c_usuario WHERE c_comentarios.id_ejemplar ='+connection.escape(idLibro)+' and c_usuario.id_usuario = c_comentarios.id_usuario';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	insertComentario : function(comentario,callback){
		if(connection)
		{
			var sql ='INSERT c_comentarios(id_usuario,id_ejemplar,comentario,calificacion,emoji) Values('+connection.escape(comentario.id_usuario)+','+connection.escape(comentario.id_ejemplar)+','+connection.escape(comentario.comentario)+','+connection.escape(comentario.calificacion)
			+','+connection.escape(comentario.emoji)+')';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	},
	getCarreras : function(callback){
		 if(connection)
		{
			var sql ='SELECT id_carrera,nombre FROM c_carrera';
			connection.query(sql, function(error, row) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null, row);
				}
			});
		}
	}
};

module.exports = dataModels;
