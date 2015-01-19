

function k(){
		for (var i= 1; i<=10 ; i++){
		document.writeln(1 + "x" + 1 + " = " + '<input type="text"  id="getallen[' + i + ']" name="getallen"/>' + "<br />" );
		}
	}
	
function antwoord(){
	for(var j = 0; j <=10; j++){
	var input = document.getElementById('getallen[' + p + ']');
	var c = j * 5;
		if (input.value == b[j]) {
		input.style.backgroundColor = 'green';
		}
		else {
		input.style.backgroundColor = 'red';
		}
		}
		}
	
/*function test() {
		
		for (var j=0;j<=10;j++){
		
		var c = a[0] * j ;
		var ant = document.getElementById("input(" + j + ")");
		console.log(c);
if ( c == ant.value) {
ant.style='background-color:green;';
} else {
ant.style='background-color:red';
}


}
}*/