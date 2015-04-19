var arr = process.argv;
function babysteps(array){
	var summation = 0;
	for (var i = 2; i < array.length; i++){
		summation += +array[i];
	}
	console.log(summation);
}
babysteps(arr);