//Function run when a direction button is pressed
function direction(heading){
	var txt = $("<pre class='item'></pre>").text(" " + heading);   // Create output with jQuery
	$("#textTarget").prepend(txt);         // Prepend the new element in the screen after #textTarget
	$(".item:gt(10)").css("color","gray");
	$(".item:gt(15)").css("color","lightgray");
	$(".item:gt(20)").slideUp("slow", function(){
		$(".item:gt(21)").remove();
	});
}