(function(){
	'use strict';
	angular.module('catalogos.tesis')
		.run(appRun);

	appRun.$inject = ['routehelper'];
	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes(){
		return [{
			name:'catalogos_tesis',
			config : {
				url :'/tesis',
				templateUrl : 'app/catalogos/tesis/tesis.html',
				controller : 'Tesis as vm',
				title : 'catalogos_tesis',
				settings : {
					nav : 3.1,
					content : 'Tesis'
				}
			}
		}];
	}

}());