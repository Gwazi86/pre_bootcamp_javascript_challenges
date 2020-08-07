// JavaScript Document

var num1;
var num2;

function myFunction() {
  var num1 = prompt("Please enter FIRST number:");
  var num2 = prompt("Please enter SECOND number:");
  var sum = num1 + num2;
  
  if ((num1 == 65 || num2 == 65 || sum == 65) && (num1 !=null || num2 !=null)) {
    document.getElementById("message").innerHTML = "True";
  }
  else {
	document.getElementById("message").innerHTML = "False";
  }
}