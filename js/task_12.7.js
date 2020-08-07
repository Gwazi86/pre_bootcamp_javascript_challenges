// JavaScript Document



function celFunction() {
	var celValue;
	
	celValue=Number(document.getElementById("celValue").value);
	var convertedCelValue = (celValue * 1.8) + 32;
	alert(celValue + " degrees Celsius = " + convertedCelValue + " Fereignheits");
}


function fahFunction() {
	var fahValue;
	
	fahValue=Number(document.getElementById("fahValue").value);
	var convertedFahValue = (fahValue - 32) / 1.8;
	alert(fahValue + " Fereignheits = " + convertedFahValue + " degrees Celsius");
}