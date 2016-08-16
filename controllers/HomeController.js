exports.index = function(req, res) {
	res.title = 'Hello World';
	res.render('home/index', res);
};

exports.other = function(req, res) {
	res.title = 'Other';
	res.render('home/other', res);
};