exports.index = function(req, res) {
	res.pageInfo = {};
	res.pageInfo.title = "Mr Shiwlochan";
	res.render('home/index', res.pageInfo);
};

exports.other = function(req, res) {
	res.pageInfo = {};
	res.pageInfo.title = "new User";
	res.render('home/other', res.pageInfo);
};

exports.about = function(req, res) {
	res.user = {};
	res.user.name = "Christina";
	res.render('home/about');
};