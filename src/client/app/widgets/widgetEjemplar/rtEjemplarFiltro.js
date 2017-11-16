(function(){
	'use strict';
	angular.module('app.widgets')
		.filter('filtroEjemplar', filtroEjemplar);


	function filtroEjemplar() {
		return function(input, idcarrera) {
            if (idcarrera) {
                console.log();
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

