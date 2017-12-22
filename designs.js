// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {


	var grid = "";

	for ( var h = 1; h <= height; h++ ) {

		var col = "";

		for ( var w = 1; w <= width; w++ ) {

			col += "<td></td>";
			console.log();
		};

		grid += "<tr>" + col + "</tr>";

	};


	console.log(grid);
	$(grid).appendTo("table");
	//$(cols).appendTo("tr");
}

makeGrid(5, 3);


