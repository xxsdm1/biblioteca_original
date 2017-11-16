(function(){
	'use strict';
	angular.module('appBiblioteca')
		.filter('filtroEjemplar', filtroEjemplar);


	function filtroEjemplar() {
		return function(input, idcarrera) {
            if (idcarrera) {
                var salida = [];
                angular.forEach(input, function(carrera) {
                    if (carrera.id_carrera === idcarrera) {
                    salida.push(carrera)
                    }
                })
                return salida;
            }else{return input;}            
        }
	}

}());

