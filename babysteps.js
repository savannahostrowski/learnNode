function babysteps(array){
	var summation = 0;
	for (var i = 2; i < process.argv.length; i++){
		summation += +process.argv[i];
	}
	console.log(summation);
}
babysteps(arr);