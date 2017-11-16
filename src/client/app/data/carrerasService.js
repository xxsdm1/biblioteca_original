(function(){
	'use strict';
	angular.module('app.data')
		.factory('carrerasService',carrerasService);

	function carrerasService($resource){
		var resource  =  $resource('/carreras',{},{
			'get':    {method:'GET'},
			'query': { method: 'GET',isArray : true },
            'update': { method: 'PUT'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
		});
		var service = {
			getCarreras : getCarreras
		};
		return service;
		
		function getCarreras(){
			return resource.query(function(data){
				return data;
			});
		}
	}

}());