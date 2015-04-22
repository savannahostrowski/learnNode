var filter = require('./module.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filter(dir, filterStr, function (err, list) {
	if (err) throw err;
	list.forEach(function (file) {
		console.log(file);
});
});