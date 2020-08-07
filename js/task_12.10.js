// JavaScript Document



function vcount() {
	var vlist = 'aeiouAEIOU';
	var str;
	var vstring = "";
  	var x;
	
	str=document.getElementById("strng").value;
	for(x = 0; x < str.length; x++)
	{
		if (vlist.indexOf(str[x]) >= 0) {
      vstring = vstring + str[x];
    }
  
  }
  
	alert("The VOWELS in the string are: " + vstring);
}