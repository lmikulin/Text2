//Function run when a direction button is pressed
function direction(heading){
	var txt = $("<pre></pre>").text(" " + heading);   // Create output with jQuery
	$("#textTarget").prepend(txt);         // Prepend the new element in the screen after #textTarget
}