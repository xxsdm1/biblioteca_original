(function(){

	'use strict';
	angular.module('app.data')
		.factory('tesisService',tesisService);

	function tesisService($resource,$stateParams){
		var resource  =  $resource('/tesis/:idTesis',{idTesis : '@id'},{
			'get':    {method:'GET',isArray : true},
			'query': { method: 'GET',isArray : true },
            'update': { method: 'PUT'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
		});

		var services  = {
			getTesis : getTesis,
			listaTesis : listaTesis,
			reservarTesis : reservarTesis
		};
		
		return services;

		function getTesis(){
			var idTesis = $stateParams.idTesis;
		 	return resource.get({idTesis},function(data){
		 		return data;
		 	});
		}

		function listaTesis(){
			return resource.query(function(data){
				return data;
			});
		}

		function reservarTesis(reserva){
			return resource.save(reserva,function(data){
				return data;
			});
		}
	}

}());