// JavaScript Document



function addFunction(num1, num2) {
  var sum = num1 + num2;
  
  
  var sumToString = sum.toString();
  
  if ((num1 == 3 || num2 == 3) && (sumToString.search('3')) !==-1) {
    console.log("True");
  }
  else {
	console.log("False");
  }
}

addFunction(31, 3);
addFunction(10, 3);
addFunction(3, 36);