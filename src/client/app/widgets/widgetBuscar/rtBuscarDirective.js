(function(){
	'use strict';
	angular.module('app.widgets')
		.directive('ngBuscar', ngBuscar);


	function ngBuscar(){

		return {
			templateUrl : 'app/widgets/widgetBuscar/rtBuscarTemplate.html',
			restrict : 'E',
			link : function(scope,el,attrs){
	            scope.autor;
	            scope.titulo="";
	            scope.selecFiltro = function(tipo){
	            	if (tipo=="autor") {
	            		 $('#busqueda').attr("ng-model", 'autor');
	            	}else{
	            		scope.autor = null;
	            		scope.titulo="";
	            	}
	            	scope.$apply();
	            }
			}
		};

	}
	
}());