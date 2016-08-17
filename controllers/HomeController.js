exports.index = function(req, res) {
	res.pageInfo = {};
	res.pageInfo.title = "Mr Shiwlochan";
	res.render('home/index', res.pageInfo);
};

exports.other = function(req, res) {
	res.title = 'Other';
	res.render('home/other', res);
};