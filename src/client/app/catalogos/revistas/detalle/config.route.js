(function(){
	'use strict';
	angular.module('revistas.detalle')
		.run(appRun);
	appRun.$inject = ['routehelper'];

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'catalogos_revistas_detalle',
			config : {
				url : '/revistas/:idRevista',
				templateUrl : 'app/catalogos/revistas/detalle/detalle.html',
				controller : 'RevistaDetalle as vm',
				title : 'catalogos_revistas_detalle',
			}
		}];
	}

}());