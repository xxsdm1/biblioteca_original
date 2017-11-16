(function(){
	'use strict';
	angular.module('app.data')
		.factory('socket',socket);

	function socket($rootScope){
		var socket = io('/48674716');
		    return {
		        on: function (eventName, callback) {
		            socket.on(eventName, function () {
		                var args = arguments;
		                $rootScope.$apply(function () {
		                    callback.apply(socket, args);
		                });
		            });
		        },
		        emit: function (eventName, data, callback) {
		            socket.emit(eventName, data, function () {
		                var args = arguments;
		                $rootScope.$apply(function () {
		                    if (callback) {
		                        callback.apply(socket, args);
		                    }
		                });
		            })
		        }
		    }
	}

}());