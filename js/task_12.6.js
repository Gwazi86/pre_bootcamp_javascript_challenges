// JavaScript Document



function maxFunction() {
	var num1;
	var num2;
	var num3;
	
	
	
	num1=Number(document.getElementById("firstNumber").value);
	num2=Number(document.getElementById("secondNumber").value);
	num3=Number(document.getElementById("thirdNumber").value);
	
	if(num1 > num2 && num1 > num3) {
		alert("The MAXIMUM number is: " + num1);
		}
	
	else if(num2 > num3) {
		alert("The MAXIMUM number is: " + num2);
		}
	
	else {
		alert("The MAXIMUM number is: " + num3);
		}
}