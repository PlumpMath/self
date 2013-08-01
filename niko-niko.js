var dailyHappinessStart = 15000;
var dailyHappiness = range(0, 100).map(function(_) {
	return {mood: Math.floor(Math.random() * 9),
	        comment: String.fromCharCode(Math.random() * 1000),
	        date: new Date((dailyHappinessStart += (Math.random() * 5)) * 24 * 60 * 60 * 1000)};
});

var stage = d3.select("#happiness");
var cellSize = 20;

var colorScale = d3.scale.ordinal()
	.domain(range(0, 9))
	.range(colorbrewer.YlGn[9]);

stage.on("mouseover", function() {
	var happiness = d3.event.target.__data__;
	d3.select("#description").text(happiness.comment + " (" + happiness.date + ")");
});
stage.on("mouseout", function() { d3.select("#description").text(""); });

var makeDaySquare = function(sel) {
	sel
	.attr("width", cellSize + "px")
	.attr("height", cellSize + "px")
	.attr("x", function(d) { return new Date(d.date).getDay() * cellSize; })
	.attr("y", function(d) { return Math.floor((toDays(d.date) - startDay) / 7) * cellSize; })
	.attr("stroke", "#000").attr("stroke-width", "0.1px")
	.attr("fill", function(d) { return colorScale(d.mood); });
}

var truncate = function(num) { return parseInt(num); };
var toDays = function(date) { return truncate(new Date(date).valueOf() / 1000 / 60 / 60 / 24); };
var toDate = function(days) { return new Date(days * 24 * 60 * 60 * 1000); };
var startDay = toDays(dailyHappiness[0].date);
stage.selectAll("rect").data(dailyHappiness)
	.enter().append("rect")
	.call(makeDaySquare);
