// JavaScript Document




function celFunction(celValue) {
	var convertedCelValue = (celValue * 1.8) + 32;
	console.log(convertedCelValue);
	
	fahFunction();
}
celFunction(42);

function fahFunction(fahValue) {
	var convertedFahValue = (fahValue - 32) / 1.8;
	console.log(convertedFahValue);
	
	/*celFunction();*/
}
fahFunction(107);

celFunction();