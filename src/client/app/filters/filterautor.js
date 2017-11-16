(function(){
	'use strict';
	angular.module('appBiblioteca')
		.filter('filterAutor',filterAutor);

	function filterAutor(){
		return function(input, autor) {
            if (autor) {
                var salida = [];
                angular.forEach(input, function(autores) {
                    if (autores.nombre === autor) {
                    salida.push(autores)
                    }
                })
                return salida;
            }else{return input;}            
        }
	}

}());