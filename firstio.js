var fs = require('fs');
var text = fs.readFileSync(process.argv[2], 'utf-8');
bufToStr = text.toString().split('\n');
console.log(bufToStr.length - 1);
