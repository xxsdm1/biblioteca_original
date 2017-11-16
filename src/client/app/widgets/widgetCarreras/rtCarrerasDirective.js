(function(){
	'use strict';
	angular.module('app.widgets')
		.directive('ngCarreras',ngCarreras);

	ngCarreras.$inject = ['carrerasService'];

	function ngCarreras(carrerasService){
		return {
			templateUrl : 'app/widgets/widgetCarreras/rtCarrerasTemplate.html',
			restrict : 'E',
			link : function(scope,el,attrs){
				init();
				function init(){
					return carrerasService.getCarreras().$promise.then(function(data){
						scope.carreras =  data;
						return scope.carreras;
					});
				}
	            
			}
		};
	}

}());