// JavaScript Document



function multiples() {
	var sum = 0;
	var i;
	
	for (i = 0; i<1000; i++) {
		
    if (i % 3 == 0 || i % 5 == 0)
	
	{
       sum = sum + i;
	}
}
	alert("The sum of all the multiples of 3 or 5 below 1000 is : " + sum);
}