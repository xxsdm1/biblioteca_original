(function(){
	'use strict';
	angular.module('tesis.detalle')
		.run(appRun);
	appRun.$inject = ['routehelper'];

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name : 'catalogos_tesis_detalle',
			config : {
				url : '/tesis/:idTesis',
				templateUrl : 'app/catalogos/tesis/detalle/detalle.html',
				controller : 'Detalle as vm',
				title : 'catalogos_tesis_detalle'
			}
		}];
	}

}());