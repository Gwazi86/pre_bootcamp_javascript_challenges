// JavaScript Document



function addFunction() {
	var num1;
	var num2;
	var sum;
	
	
	
	num1=Number(document.getElementById("firstNumber").value);
	num2=Number(document.getElementById("secondNumber").value);
	sum = num1 + num2;
	var sumToString = sum.toString();

  
  	if ((num1 == 3 || num2 == 3) && (sumToString.search('3')) !==-1) {
		alert(true);
		}
	
	else {
	alert(false);
	}
}