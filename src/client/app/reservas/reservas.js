(function(){
	'use strict';
	angular.module('app.reservas')
		.controller('Reservas',Reservas);

	Reservas.$inject=['reservasService'];
	
	function Reservas(reservasService){
		var vm=this;

		vm.reservas;
		console.log("Reservas vemos");
		init();
		function init(){
			return reservasService.getReservas().$promise.then(function (data){
				vm.reservas = data;
				console.log("dataaa",data);
				return vm.reservas;
			});
		}
		
	}

}());