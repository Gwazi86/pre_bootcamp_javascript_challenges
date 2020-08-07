// JavaScript Document

var x = 0;
var y = 1;

document.getElementById("xvalue").innerHTML = "<strong>The value of X is: </strong>" + x;
document.getElementById("yvalue").innerHTML = "<strong>The value of Y is: </strong>" + y;

x = x + 3;
y = y + x;

document.getElementById("newxvalue").innerHTML = "<strong>The value of X is: </strong>" + x;
document.getElementById("newyvalue").innerHTML = "<strong>The value of Y is: </strong>" + y;