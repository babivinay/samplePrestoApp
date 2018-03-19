module.exports = {}




function check(arr){
	var temp = 0;
	arr.map(function(item){
		if(item%2==0)
			temp++;
		else
			temp--;
	})
	return temp;
}