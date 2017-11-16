(function(){
	'use strict';
	angular.module('app.widgets')
		.directive('ngCalificar',ngCalificar);

	function ngCalificar(){
		return {
			templateUrl : 'app/widgets/widgetCalificar/rtCalificarTemplate.html',
			restrict : 'E',
			link : function(scope,el,attrs){
	            scope.index = attrs.calificacion;
	            scope.calificar= function(index){
	            	scope.index = index;
	            	return scope.index;
	            }
			}
		};
	}

}());