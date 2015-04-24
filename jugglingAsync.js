var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var outpt = [];

function jugglingAsync (urls) {
	urls.forEach(function (entry))
}
http.get(url, function (res) {
	var data = '';
	res.setEncoding('utf8');
	res.on('data', function (chunk){
		data += chunk;
	});
	res.on('end', function () {
		console.log(data)
	});
});