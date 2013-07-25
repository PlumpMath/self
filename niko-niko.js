var dailyHappiness = range(0, 100).map(function(_) {
	return {mood: Math.floor(Math.random() * 9),
	        comment: String.fromCharCode(Math.random() * 1000)};
});

var stage = d3.select("#happiness");
var cellSize = 20;

var colorScale = d3.scale.ordinal()
	.domain(range(0, 9))
	.range(colorbrewer.YlGn[9]);

stage.on("mouseover", function() {
	d3.select("#description").text(d3.event.target.__data__.comment);
});
stage.on("mouseout", function() { d3.select("#description").text(""); });

var makeDaySquare = function(sel) {
	sel
	.attr("width", cellSize + "px")
	.attr("height", cellSize + "px")
	.attr("x", function(_, i) { return i % 7 * cellSize; })
	.attr("y", function(_, i) { return Math.floor(i / 7) * cellSize; })
	.attr("stroke", "#000").attr("stroke-width", "0.1px")
	.attr("fill", function(d) { return colorScale(d.mood); });
}

stage.selectAll("rect").data(dailyHappiness)
	.enter().append("rect")
	.call(makeDaySquare);
