

$(document).ready(function(){
// set some const variables and default color for a colorwell
const colorWell = document.getElementById("colorPicker");
const canvas = $("#pixel_canvas");
let color = "#000000";
let drag = false;

// make a function that will build the grid with height and width params
// append the grid to table element
function makeGrid(height, width) {


	let grid = "";

	for ( let h = 1; h <= height; h++ ) {

		let col = "";

		for ( let w = 1; w <= width; w++ ) {

			col += "<td></td>";

		};

		grid += "<tr>" + col + "</tr>";

	};

	$(grid).appendTo("table");

}

// making an event handler on submit button
$('#sizePicker').on("submit", function(e) {

	e.preventDefault(); //preventing a default handling for click event
	$("tr").remove(); //reset our previos grid, if it was
	let hval = "";
	let wval = "";
	hval = $("#input_height").val();
	wval = $("#input_width").val();
	makeGrid(hval, wval);
	$("td").css("background-color", "white");

});

// set a new color for paint on colorwell change
$("#colorPicker").on("change", function(){

	color = colorWell.value;

});


// making an event handler for drag start or click on a gridcell
canvas.mousedown(function(event){
	drag = true;
	if (event.which === 3) {
		deleteColor(event);
	} else {
		colorCell(event, color);
	}
});

// making an event handler for mouse drag on a grid
canvas.mouseover(function(event) {
	if(drag && event.which === 3) {
		deleteColor(event);
	} else if(drag && event.which === 1) {
		colorCell(event, color);
	}
});

// drag is over
$("body").mouseup(function(event){
	drag = false;
});

// no context menu on right-click
canvas.contextmenu(false);

// function for paint a gridcell
function colorCell(event, color){
	$(event.target).css("background-color", color);
}

// function for clearing a gridcell
function deleteColor(event){
	$(event.target).css("background-color", "white");
}

// set the event handler for to clear the grid
$("button").on("click", function(e){
	e.preventDefault;
	$("td").css("background-color", "white");
});

})

