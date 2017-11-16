(function() {
	'use strict';

	angular.module("app.profile")
		.run(appRun);

	appRun.$inject = ['routehelper'];

	function appRun(routehelper){

		routehelper.configureRoutes(getRoute());

	}

	function getRoute(){

		return [{
			name: 'profile',
			config: {
				url: "/perfil",
				templateUrl: "app/profile/profile.html",
				controller: "Profile as vm",
				settings: {
					nav: 1,
					content: "Perfil",
				}
			}
		}]
	}
}());