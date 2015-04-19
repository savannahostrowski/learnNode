var arr = process.argv;
function babysteps(array){
	var summation = 0;
	for (var i = 2; i < array.length; i++){
		num = +array[i];
		summation += num;
	}
	console.log(summation);
}
babysteps(arr);