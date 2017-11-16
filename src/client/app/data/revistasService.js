(function(){
	'use strict';
	angular.module('app.data')
		.factory('revistasService',revistasService);

	function revistasService($resource,$stateParams){
		var resource  =  $resource('/revistas/:idRevista',{idRevista : '@id'},{
			'get':    {method:'GET',isArray : true},
			'query': { method: 'GET',isArray : true },
			'comentarios' : {method : 'POST',url: '/comentarios/revistas',isArray:true},
            'comentar' : {method:'POST',url : '/comentar/revista'},
            'update': { method: 'PUT'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
		});

		var services  = {
			getRevista : getRevista,
			listaRevistas : listaRevistas,
			reservarRevistas : reservarRevistas,
			getComentarios : getComentarios,
			comentar : comentar
		};
		
		return services;

		function getRevista(){
			var idRevista = $stateParams.idRevista;
		 	return resource.get({idRevista},function(data){
		 		return data;
		 	});
		}

		function listaRevistas(){
			return resource.query(function(data){
				return data;
			});
		}

		function reservarRevistas(reserva){
			return resource.save(reserva,function(data){
				return data;
			});
		}

		function getComentarios(){
			var idRevista = $stateParams.idRevista;
			return resource.comentarios({idRevista},function(data){
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