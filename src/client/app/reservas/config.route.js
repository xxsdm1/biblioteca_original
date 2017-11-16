(function(){
	'use strict';
	angular.module('app.reservas')
		.run(appRun);

	appRun.$inject = ['routehelper'];

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'reservas',
			config : {
				url : '/reservas',
				templateUrl : 'app/reservas/reservas.html',
				controller : 'Reservas as vm',
				title : 'reservas',
				settings : {
					nav : 3 ,
					content : 'Tus Reservas'
				}
			}
		}];
	}

}());