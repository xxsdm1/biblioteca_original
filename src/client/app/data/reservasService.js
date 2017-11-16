(function(){
	'use strict',
	angular.module('app.data')
		.factory('reservasService',reservasService);

	function reservasService($resource){
		var resource=$resource('/reservas',{},{
			'get':    {method:'GET',isArray : true},
			'query': { method: 'GET',isArray : true },
            'update': { method: 'PUT'},
	        'save': { method: 'POST'  },
	        'remove': { method:'DELETE'},
		});
		var service = {
			getReservas : getReservas,
		};
		return service;
		function getReservas(){
			return resource.query(function (data){
				return data;
			});

		}

	}
}());