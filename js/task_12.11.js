// JavaScript Document



function commChrs() {
	
	str1=document.getElementById("fstrng").value;
	str2=document.getElementById("sstrng").value;
	
	var strng1 = str1.toLowerCase().split('');
	var strng2 = str2.toLowerCase().split('');
	var strngArray = [];
	var x;
	
	for(x = 0; x < strng1.length; x++) {
		if(strng2.indexOf(strng1[x]) >= 0) {
			strngArray.push(strng1[x]);
		}
	}
	alert(strngArray);
}