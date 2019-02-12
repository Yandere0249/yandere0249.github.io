let button = document.getElementById("knopka");
let input = document.getElementById("input");
let output = document.getElementById("output");


function print() 
{
	let a = input.value;
	var sum = 1.8*a+32;
	output.value = sum;
}

button.addEventListener("click", print);