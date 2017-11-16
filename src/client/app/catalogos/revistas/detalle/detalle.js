(function(){
	'use strict';
	angular.module('revistas.detalle')
		.controller('RevistaDetalle',RevistaDetalle);

	function RevistaDetalle(revistasService){
		var vm = this;
		vm.revista;
		vm.newComentario;
		vm.comentarios;
		init();

		function init(){
			getRevista();
			getComentarios();
		}

		vm.reservar =  function(){
			var reserva = {id_usuario : 41452095 ,id_ejemplar : vm.revistas[0].id_ejemplar};
			return revistasService.reservarRevista(reserva).$promise.then(function(data){
				return data;
			});
		}
		vm.comentar = function(){
			if (vm.newComentario.comentario) {
				vm.newComentario.calificacion =2;
				vm.newComentario.id_ejemplar = vm.revista[0].id_ejemplar;
				vm.newComentario.id_usuario = 48674716;
				return revistasService.comentar(vm.newComentario).$promise.then(function(data){
					vm.comentarios.unshift(vm.newComentario);
					vm.newComentario;
				});
			}
		}
		function getRevista(){
			return revistasService.getRevista().$promise.then(function(data){
				vm.revista = data;
				return vm.revista;
			});
		}
		vm.fecha = function(data){
			var collectionDate = data;
			var date = new Date(collectionDate);
			return date;
		}
		function getComentarios(){
			return revistasService.getComentarios().$promise.then(function(data){
				vm.comentarios = data.reverse();
				return vm.comentarios;
			});
		}
	}

}());