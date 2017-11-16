(function(){
	'use strict';
	angular.module('catalogos.libros')
		.run(appRun);

	appRun.$inject  = ['routehelper'];

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}

	function getRoutes(){
		return [{
			name : 'catalogos_libros',
			config : {
				url : '/libros',
				templateUrl : 'app/catalogos/libros/libros.html',
				controller : 'Libros as vm',
				title : 'catalogos_libros',
				settings : {
					nav : 2.1,
					content : ' Libros'
				}

			}
		}];

	}

}());