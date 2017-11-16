(function(){
	'use strict';

	angular.module('app.data')
		.factory('shellService',shellService);


	function shellService($resource,$stateParams){

		var resource  =  $resource('/notificaciones',{},{
			'get':    {method:'GET',isArray : true},
			'save' : {method:'POST',isArray : true},
			'query': { method: 'GET',isArray : true },
		});

		var services = {
			getNotificaciones : getNotificaciones,
		};

		return services;

		function getNotificaciones(data){
			return resource.save(data,function(data){
				return data;
			});
		}
	}
}());