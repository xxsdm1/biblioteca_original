(function() {
	angular.module('app.profile')
		.controller("Profile", Profile);

	function Profile($scope, profileService){

		$scope.mostrar = true;
		$scope.btnText = "Editar";
		$scope.btnClass = "form-control btn btn-primary";
		$scope.txtClass = "";

		$scope.cambiar = function() {
			if($scope.mostrar == true){
				$scope.btnText = "Cerrar";
				$scope.btnClass = "form-control btn btn-danger";
			}else {
				$scope.btnText = "Editar";
				$scope.btnClass = "form-control btn btn-primary";
			}
			return $scope.mostrar = !$scope.mostrar;
		}

		$scope.libros = [];
		$scope.usuario = {};

		libros();
		usuarios();

		console.log("estos son" + $scope.usuario);

		function libros(){
			return profileService.listaLibros().$promise.then(function(data){
				$scope.libros = data;
				console.log("datos : ",data);
			});  
		}

		function usuarios(){
			return profileService.datosUsuario().$promise.then(function(data){
				$scope.usuario = data[0];
		 		console.log("datos : ",data[0]);
			});
		}


		$scope.actualizarDatos = function(){
			return profileService.updateDataProfile($scope.usuario).$promise.then(function(data){
		 		console.log("datos : ",data);
			});
		}
		// function usuarios(){
		// 	return profileService.getUsuario().$promise.then(function(data){
		// 		$scope.usuario = data;
		// 		console.log("datos : ",data);
		// 	});  
		// }

	}
}());