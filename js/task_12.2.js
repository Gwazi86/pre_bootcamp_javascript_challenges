// JavaScript Document

var x;
var y;
var z;
var a;
var b;
document.getElementById("xvalue").innerHTML = "<strong>x = 1 + 1 * 2</strong>";
document.getElementById("yvalue").innerHTML = "<strong>y = (1 + 1) * 2</strong>";
document.getElementById("zvalue").innerHTML = "<strong>z = 1 + ( 1 * 2 )</strong>";
document.getElementById("avalue").innerHTML = "<strong>a =  1 + 1 * 2 / 2</strong>";
document.getElementById("bvalue").innerHTML = "<strong>b =  (1 + 1 * 2 ) /  2</strong>";

x = 1 + 1 * 2;
y = (1 + 1) * 2;
z = 1 + ( 1 * 2 );
a =  1 + 1 * 2 / 2;
b =  (1 + 1 * 2 ) /  2;

document.getElementById("newxvalue").innerHTML = "<strong>The value of X is: </strong>" + x;
document.getElementById("newyvalue").innerHTML = "<strong>The value of Y is: </strong>" + y;
document.getElementById("newzvalue").innerHTML = "<strong>The value of Z is: </strong>" + z;
document.getElementById("newavalue").innerHTML = "<strong>The value of A is: </strong>" + a;
document.getElementById("newbvalue").innerHTML = "<strong>The value of B is: </strong>" + b;