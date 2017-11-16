(function(){
	'use strict';
	angular.module('libros.detalle')
		.controller('LibroDetalle',LibroDetalle);

	LibroDetalle.$inject = ['librosService'];

	function LibroDetalle(librosService){
		var vm = this;
		vm.libro;
		vm.newComentario;
		vm.comentarios;
		init();

		function init(){
			getLibro();
			getComentarios();
		}

		vm.reservar =  function(){
			
			var reserva = {id_usuario : 41452095 ,id_ejemplar : vm.libro[0].id_ejemplar};
			return librosService.reservarLibros(reserva).$promise.then(function(data){
				return data;
			});
		}
		vm.comentar = function(){
			if (vm.newComentario.comentario) {
				vm.newComentario.calificacion =2;
				vm.newComentario.id_ejemplar = vm.libro[0].id_ejemplar;
				vm.newComentario.id_usuario = 48674716;
				return librosService.comentar(vm.newComentario).$promise.then(function(data){
					vm.comentarios.unshift(vm.newComentario);
					vm.newComentario;
				});
			}
		}
		function getLibro(){
			return librosService.getLibro().$promise.then(function(data){
				vm.libro = data;
				return vm.libro;
			});
		}
		vm.fecha = function(data){
			var collectionDate = data;
			var date = new Date(collectionDate);
			return date;
		}
		function getComentarios(){
			return librosService.getComentarios().$promise.then(function(data){
				vm.comentarios = data.reverse();
				return vm.comentarios;
			});
		}
	}


}());