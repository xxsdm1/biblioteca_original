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
	getReservas : function(callback){
		if (connection) {
			var sql = "SELECT c_prestamo.*, c_ejemplar.titulo, c_libro.ruta_portada FROM c_prestamo, c_ejemplar, c_libro where c_prestamo.id_ejemplar = c_ejemplar.id_ejemplar and c_libro.id_libro = c_ejemplar.id_ejemplar and c_prestamo.id_usuario = " + 41452095;
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