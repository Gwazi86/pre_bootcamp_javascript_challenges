// JavaScript Document




function celFunction(celValue) {
	var convertedCelValue = (celValue * 1.8) + 32;
	console.log(convertedCelValue);
}


function fahFunction(fahValue) {
	var convertedFahValue = (fahValue - 32) / 1.8;
	console.log(convertedFahValue);
}


celFunction(42);
fahFunction(107);