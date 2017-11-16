(function(){
	'use strict';
	var core = angular.module('app.core');

	var config = {
		appErrorPrefix :'[NG-Biblioetca Error]',//configura el exceptionHandler decorator
		appTitle : 'Biblioetca Angular Demo',
		version :'1.0.0'
	};

	core.value('config',config);

	core.config(configure);

	function configure($logProvider,$urlRouterProvider,$stateProvider,routehelperConfigProvider){
		//activa o desactiva el debugging
		if($logProvider.debugEnabled){
			$logProvider.debugEnabled(true);
		}

		routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
		routehelperConfigProvider.config.$stateProvider = $stateProvider;
		routehelperConfigProvider.config.docTitle = 'NG-Biblioteca';
		
		var resolveAlways = {
			ready : function(dataService){
				return dataService.ready();
			}
		}
		routehelperConfigProvider.config.resolveAlways= resolveAlways;

	}


}());