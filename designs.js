// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {


	for ( var h = 1; h <= height; h++ ) {
		var row = "";
		row += "<tr>";

		for ( var w = 1; w <= width; w++ ) {
			var col = "";
			col += "<td></td>";
			console.log();
		};
		var grid = "";
		grid += row + col + "</tr>";

	};


	console.log(grid);
	$(grid).appendTo("table");
	//$(cols).appendTo("tr");
}

makeGrid(3, 3);


