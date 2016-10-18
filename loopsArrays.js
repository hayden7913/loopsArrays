function max(arr){
	return arr.reduce(function (av, cv) {
		if(av < cv){
			return cv; 
		} 
		return av;
	});
};

console.log("Max of [2,1,4,3]: " + max([2,1,4,3]));

function min(arr){
	return arr.reduce(function (av, cv) {
		if(av > cv){
			return cv; 
		} 
		return av;
	});
};

console.log("Min of [2,1,4,3]: " + min([2,1,4,3]));

function average(arr){
	return arr.reduce(function(av,cv){
		return av + cv;
	})/arr.length;
}

console.log("Average of [2,1,4,3]: " + average([2,1,4,3]));


function fizzBuzz(countTo){
	var res = [];
	for (var i = 1; i <= countTo; i++){
		
		if((i % 5 === 0 && i % 3 === 0)){
			res.push("fizzbuzz");
		}
		else if(!(i % 3)){
			res.push("fizz");
		}
		else if(!(i % 5)){
			res.push("buzz");
		}
		else {
			res.push(i);
		}
	}
	return res;
}

console.log(fizzBuzz(20));
