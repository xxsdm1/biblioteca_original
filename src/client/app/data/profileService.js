(function(){
	'use strict';
	angular.module('app.data')
		.factory('profileService',profileService);

	function profileService($resource,$stateParams){
		console.log("dfcdg");
		var resource = $resource('/perfil',{},{ 
			'get':    {method:'GET',isArray: true},
			'query': { method: 'GET', isArray: true},
			'usuarios': { method: 'GET', url: '/usuarios', isArray: true},
            'update': { method: 'PUT'},
	        'save': { method: 'POST'},
	        'remove': { method:'DELETE'}
		});


		var services = {
			updateDataProfile : updateDataProfile,
			listaLibros: listaLibros,
			datosUsuario: datosUsuario
		};
		return services;

		function updateDataProfile(data){
		 	console.log("Entramos");
		 	return resource.update(data,function(data){
		 		return data;
		 	});
		}

		function listaLibros(){
			return resource.query(function(data){
				return data;
			});
		}

		function datosUsuario(){
			console.log("Usuarios");
			return resource.usuarios(function(data){
				return data;
			});
		}
	}


}());