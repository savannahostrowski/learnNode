var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data) {
	if (err) throw err; 
	var bufToStr = data.toString().split('\n');
	console.log(bufToStr.length - 1);
});


