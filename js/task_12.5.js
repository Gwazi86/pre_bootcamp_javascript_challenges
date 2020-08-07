// JavaScript Document



function areaFunction() {
	var num1;
	var num2;
	var num3;
	var area;
	
	
	
	num1=Number(document.getElementById("firstNumber").value);
	num2=Number(document.getElementById("secondNumber").value);
	num3=Number(document.getElementById("thirdNumber").value);
	var area = 1/2*(num1 + num2 + num3);

  	alert("The AREA of the triangle is: " + area);
}