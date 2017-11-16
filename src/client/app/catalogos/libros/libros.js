(function(){
	'use strict';
	angular.module('catalogos.libros')
		.controller('Libros', Libros);

	Libros.$inject = ['$scope','librosService'];
	function Libros($scope,librosService) {
			var vm = this;
			$scope.ids = [1,2,3,4,5,6,7,8,9];
		 	vm.tipoBuscar = "descripcion";
			$scope.buscar;
			$scope.libros = [];

			libros();
			// prueba();
			function libros(){
				return librosService.listaLibros().$promise.then(function(data){
					$scope.libros = data;
				});  
			}
			function prueba(){
				var data = {id_usuario : 1243, id_prestamo :1};
				return librosService.evento(data).$promise.then(function(dara){
					console.log("dataaaaa",data);
				});
			}

			$scope.select = function(index){
				console.log("posicion",index);
				$scope.carrera = $scope.carreras[index].id_carrera;
			}


	}

}());

