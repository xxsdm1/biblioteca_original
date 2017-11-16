(function(){
	'use strict';
	angular.module('app.core',[
		//componentes independientes
		'blocks.logger',
		'blocks.router',
		'app.data',


		//componentes de terceros
		'ui.router']);
}());