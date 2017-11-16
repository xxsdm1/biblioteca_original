(function(){
	'use strict';
	angular.module('catalogos.revistas')
		.controller('Revistas',Revistas);

	Revistas.$inject = ['$scope','revistasService'];
	function Revistas($scope,revistasService){
		var vm = this;
			vm.revistas = [];

			revistas();
			function revistas(){
				return revistasService.listaRevistas().$promise.then(function(data){
					console.log("Revistas",data);
					vm.revistas = data;
					return vm.revistas;
				});  
			}
			$scope.select = function(index){
				console.log("posicion",index);
				$scope.carrera = $scope.carreras[index].id_carrera;
			}
	}

}());