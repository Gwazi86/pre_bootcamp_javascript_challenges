// JavaScript Document



function commChrs(string1, string2) {
	
	var str1 = string1.toLowerCase().split('');
	var str2 = string2.toLowerCase().split('');
	var strngArray = [];
	var x;
	
	for(x = 0; x < str1.length; x++) {
		if(str2.indexOf(str1[x]) >= 0) {
			strngArray.push(str1[x]);
		}
	}
	console.log(strngArray);
}
commChrs("andile", "sylvestermagwaza");