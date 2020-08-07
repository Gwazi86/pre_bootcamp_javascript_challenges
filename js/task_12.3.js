// JavaScript Document



function addFunction() {
	var num1;
	var num2;
	var sum;
	
	num1=Number(document.getElementById("firstNumber").value);
	num2=Number(document.getElementById("secondNumber").value);
	sum = num1 + num2;

	
  	if (num1 == 65 || num2 == 65 || sum == 65) {
		alert(true);
		}
	
	else {
	alert(false);
	}
}