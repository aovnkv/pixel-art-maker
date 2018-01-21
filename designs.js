
// set some const variables and default color for a colorwell

const colorWell = document.getElementById("colorPicker");
let color = "#000000";

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

$('input[type="submit"]').on("click", function(e) {

	e.preventDefault(); //preventing a default handling for click event
	$("tr").remove(); //reset our previos grid, if it was
	let hval = "";
	let wval = "";
	hval = $("#input_height").val();
	wval = $("#input_width").val();
	makeGrid(hval, wval);
	$("td").css("background-color", "white");

})

// set a new color for paint on colorwell change

$("#colorPicker").on("change", function(){

	color = colorWell.value;
	//console.log(color);
})

// making an event handler with event delegation for painting grid cells by clicking them

$("#pixel_canvas").on("click", "td", function(evt){

	$(evt.target).css("background-color", color);
})

// set the event handler for to clear the grid button

$("button").on("click", function(e){
	e.preventDefault;
	$("td").css("background-color", "white");
})


