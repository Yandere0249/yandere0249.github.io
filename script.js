var textarea = document.getElementById("sandbox");
let button = document.getElementById("knopka");

		function print() {
			
	text = textarea.value;
	var arr = text.split('.');
	var arr = text.split(',');
	var arr = text.split(' ');

	var result = {};
	
for (var i = 0; i < arr.length; ++i)
{
    var a = arr[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
}

for (var key in result)
	
	alert(key + ' повторяется ' + result[key] + ' раз(а)');
}

button.addEventListener("click", print);