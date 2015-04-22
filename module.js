var fs = require('fs')
var path = require('path');

module.exports = function (dirname, filterStr, callback) {
	fs.readdir(dirname, function (err, list) {
		if (err) {
			return callback(err);
		}
		var list = list.filter(function (file) {
			return path.extname(file) === '.' + filterStr;
		});

	  callback(null, list);
	})
}

