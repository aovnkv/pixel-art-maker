// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

	r = "<tr>";
	c = "<td></td>";

	for ( var h = 1; h <= height; h++ ) {
		var rows = "";
		rows += r;

		for ( var w = 1; w <= width; w++ ) {
			var cols = "";
			cols += c + "</tr>";
			console.log();
		};
		var grid = "";
		grid += rows + cols;

	};


	console.log(grid);
	$(grid).appendTo("table");
	//$(cols).appendTo("tr");
}

makeGrid(3, 3);


