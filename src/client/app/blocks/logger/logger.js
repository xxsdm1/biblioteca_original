(function(){
	'use strict';
	angular.module('blocks.logger')
		.factory('logger',logger);

	function logger($state){
		var service = {
            showToasts: true,
            error: error,
            info: info,
            success: success,
            warning: warning,
        };
        return service;
        //metodo para loggear error
        function error(message, data, title){
	       Push.create("Hello world!", {
                body: "How's it hangin'?",
                icon: 'content/imagenes/icons/error.png',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        }
        //metodo para loggear informacion
        function info(data){
        	 Push.create(data.titulo, {
                body: data.descripcion,
                icon: 'content/imagenes/icons/logo.png',
                timeout: 4000,
                onClick: function () {
                    $state.go('catalogos_'+data.categoria+'s_detalle',{idLibro:data.id_ejemplar});
                    window.focus();
                    this.close();
                }
            });
        }
        function success(message, data, title){
        	Push.create(title, {
                body: message,
                icon: 'content/imagenes/icons/data',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        }
        function warning(message, data, title){
        	Push.create(title, {
                body: message,
                icon: 'content/imagenes/icons/data',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        }
	}

}());