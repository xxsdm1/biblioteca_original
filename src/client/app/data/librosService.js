(function(){
	'use strict';

	angular.module('app.data')
		.factory('librosService',librosService);


	function librosService($resource,$stateParams){

		var resource  =  $resource('/libros/:idLibro',{idLibro: '@id'},{
			'get':    {method:'GET',isArray : true},
			'query': { method: 'GET',isArray : true },
            'update': { method: 'PUT'},
            'comentarios' : {method : 'POST',url: '/comentarios',isArray:true},
            'comentar' : {method:'POST',url : '/comentar'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
	        'evento' :{method: 'POST',url:'/evento',isArray:true}
		});

		var services = {
			getLibro : getLibro,
			listaLibros : listaLibros,
			reservarLibros : reservarLibros,
			getComentarios : getComentarios,
			comentar : comentar,
			evento : evento
		};

		return services;

		function evento(data){
			return resource.evento(data,function(data){
				return data;
			});
		}

		function getLibro(){
		 	var idLibro = $stateParams.idLibro;
		 	return resource.get({idLibro},function(data){
		 		console.log("resource dara",data);
		 		return data;
		 	});
		 }

		function listaLibros(){
			return resource.query(function(data){
				return data;
			});
		}

		function reservarLibros(reserva){
			return resource.save(reserva,function(data){
				return data;
			});
		}
		function getComentarios(){
			var idLibro = $stateParams.idLibro;
			return resource.comentarios({idLibro},function(data){
				return data;
			});
		}
		function comentar(data){
			return resource.comentar(data,function(data){
				return data;
			});
		}

	}

}());