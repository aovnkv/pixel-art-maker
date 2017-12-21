// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

	r = "<tr></tr>";
	c = "<td></td>";

	for ( var h = 1; h<= height; h++ ) {
		rows = "";
		rows += r;
		console.log(rows);
	};

	for ( var w = 1; w <= width; w++ ) {
		cols = "";
		cols += c;
		console.log(cols);
	};

	return $(rows).appendTo("table");
	$(cols).appendTo("tr");
}

makeGrid(2, 3);


