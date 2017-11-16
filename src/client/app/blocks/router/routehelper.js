(function(){
	'use strict';
	angular.module('blocks.router')
		.provider('routehelperConfig',routehelperConfig)
		.factory('routehelper',routehelper);

	routehelper.$inject = ['$rootScope','$state','routehelperConfig'];

	function routehelperConfig(){
		this.config = {
			$urlRouterProvider: undefined,
			$stateProvider : undefined,
			resolveAlways : function(){
			},
			docTitle : undefined
		};
		this.$get =  function(){
			return {config: this.config};
		};	
	}


	function routehelper($rootScope,$state,routehelperConfig){
		var routes = [];
		var $urlRouterProvider = routehelperConfig.config.$urlRouterProvider;
		var $stateProvider = routehelperConfig.config.$stateProvider;
		var service = {
			configureRoutes : configureRoutes,
			getRoutes : getRoutes
		};

		init();

		return service;

		function configureRoutes(routes){
			routes.forEach(function(route){
				route.config.resolve = angular.extend(route.config.resolve || {}, routehelperConfig.resolveAlways);
				$stateProvider.state(route.name , route.config);
				$urlRouterProvider.otherwise('/');
			});
		}


		function getRoutes(){
			var rutaNueva="";
			for (var i = 0; i < $state.get().length; i++) {
				var route = $state.get()[i];
				var isRoute = !!route.name;
				if( isRoute){
					var subRoute = route.name.split("_");
					if (subRoute[1] && !subRoute[2]) {
						if (subRoute[0]!= rutaNueva) {
								var navRoute = parseInt(route.settings.nav);
								var route = {
									name:subRoute[0],
									settings : {
										nav : navRoute,
										content : subRoute[0]
									},
									children : []
								};
								for (var j = i; j < $state.get().length; j++) {
									var routeChildren = $state.get()[j];
									var isRoute = routeChildren.name.split("_");
									console.log("ruta",isRoute[0]);
									if (subRoute[0]==isRoute[0] && !isRoute[2]) {
										route.children.push(routeChildren);
									}
								}
								rutaNueva = subRoute[0]; 
								routes.push(route);
						}
					}else{
						routes.push(route);
					}
					
				}
			}
			return routes;
		}
		function init(){
			updateDocTitle();
		}

		function updateDocTitle(){
			$rootScope.$on('$stateChangeSuccess',function(event,toState,fromState){
				var title = routehelperConfig.config.docTitle + ' ' +(toState.title || '');
                    $rootScope.title = title;
			});
		}


	}



}());