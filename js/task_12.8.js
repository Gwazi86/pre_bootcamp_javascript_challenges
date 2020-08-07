// JavaScript Document



function timeConverter() {
	var num;
	
	num=Number(document.getElementById("num").value);
	var hours = Math.floor(num / 60);  
  	var minutes = num % 60;
	alert(hours + " hour, " + minutes + " minutes");
}