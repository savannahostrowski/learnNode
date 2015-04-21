var fs = require('fs');
var path = require('path');

var dirname = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirname, function (err, data) {
	if (err) throw err;
	for (var i = 0; i < data.length; i++) {
		var elemExt = path.extname(data[i]);
		var len = elemExt.length;
		var withoutDot = elemExt.substring(1, len);
		if (withoutDot === ext) {
			console.log(data[i]);
		}
	}
});