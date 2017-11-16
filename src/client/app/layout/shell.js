(function(){
	'use strict';
	angular.module('app.layout',[])
		.controller('Shell',Shell);

	Shell.$inject = ['socket','logger','shellService'];
	function Shell(socket,logger,shellService){
		var vm =  this;
		vm.notificaciones;
		vm.newNotificaciones=0;
		init();
		function init(){

			return shellService.getNotificaciones({idUser : 48674716}).$promise.then(function(data){
				console.log("notificaciones",data.length);
				vm.notificaciones = data.reverse();
				return vm.notificaciones;
			});
		}
		
		socket.on('notificacionUser', function(data) {
			console.log("notificar",data);
			vm.newNotificaciones +=1;
			logger.info(data);
			vm.notificaciones.unshift(data);
	    });

		socket.on('prueba',function(data){
	    	alert(data.data);
	    });
	    socket.emit('newUser',{id_usuario: 48674716});
		console.log("shell");
	}

}());