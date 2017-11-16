'use strict';
var mysql = require('../../config/mysql');

var connection=mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'biblioteca_db',
   port: 3306
});



var dataModels = {
	updateDataProfile : function(data, callback){
		console.log("editado");
		if(connection)
		{
			var sql = 'UPDATE c_usuario SET nombres = ' + connection.escape(data.nombres)  + ', ap_paterno =' + connection.escape(data.ap_paterno) + ', direccion =' + connection.escape(data.direccion) + ', telefono =' + connection.escape(data.telefono) +', email =' + connection.escape(data.email) +  ' WHERE id_usuario = ' + connection.escape(data.id_usuario);
			connection.query(sql, function(error, result) 
			{
				if(error)
				{
					throw error;
				}
				else
				{
					callback(null,{"mensaje":"Actualizado"});
				}
			});
		}
	},
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
	getUserData : function(callback){
		 if(connection)
		{	
			var sql ='SELECT*FROM c_usuario WHERE id_usuario = ' + 75945279;
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
