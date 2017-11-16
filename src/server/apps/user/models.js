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
	getNotificaciones : function(idUsuario,callback){
		if(connection)
		{	
			var sql ='SELECT*FROM c_notificaciones WHERE id_usuario='+connection.escape(idUsuario)+' and estado = 0';
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
	actuaNotificacion : function(idNotificacion,callback){
		if(connection)
		{	
			var sql ='UPDATE c_notificaciones SET estado=1 WHERE id_notificacion='+connection.escape(idNotificacion)+'';
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
	postNotificaciones : function(idUser,callback){
		if(connection)
		{	
			var sql ='SELECT c_notificaciones.*,c_ejemplar.titulo,c_ejemplar.id_ejemplar,c_ejemplar.id_carrera FROM c_notificaciones INNER JOIN c_ejemplar ON c_notificaciones.id_ejemplar=c_ejemplar.id_ejemplar   and c_notificaciones.id_usuario= '+connection.escape(idUser) +';';
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
