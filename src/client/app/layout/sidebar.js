(function(){
	'use strict';
	angular.module('app.layout')
		.controller('Sidebar',Sidebar);

	Sidebar.$inject = ['routehelper','$state'];
	function Sidebar(routehelper,$state){
		var vm =  this;
		var routes = routehelper.getRoutes();
		console.log("routes",routes);
		vm.estado="";
		vm.isCurrent = isCurrent;

		activate();

		function activate(){
			getNavRoutes();
		}

		function getNavRoutes(){
			vm.navRoutes = routes.filter(function(r){
				return r.settings && r.settings.nav;
			}).sort(function(r1,r2){
				return r1.settings.nav - r2.settings.nav;
			});
		}

		function isCurrent(route){
			if(!route.title || !$state.current || !$state.current.title){
				return '';
			}
			var menuName = route.title;
			if ($state.current.title.substr(0,menuName.length) === menuName) {
				vm.estado = $state.current.title;
			}
			
			return $state.current.title.substr(0,menuName.length) === menuName ? 'current'  :'';
		}

	}


}());