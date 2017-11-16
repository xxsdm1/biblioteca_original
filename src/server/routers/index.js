var router_libro = require('../apps/libros/controller');
var router_revista = require('../apps/revistas/controller');
var router_profile = require('../apps/profile/controller');
var router_reservas = require('../apps/reservas/controller');
var router_user =  require('../apps/user/controller');

var routers  = function (app,server) {
	app.use('/', router_libro);
	app.use('/', router_revista);
	app.use('/',router_user);
	app.use('/',router_profile);
	app.use('/',router_reservas);
	
	var io = require("socket.io").listen(server);
 	require('../apps/user/socket')(io);
	
};
module.exports = routers;