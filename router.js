
var HomeController = require('./controllers/HomeController');

module.exports = function(app) {

	app.get('/', HomeController.index);
	app.get('/other', HomeController.other);
	app.get('/about', HomeController.about);

};