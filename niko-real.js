var activityUrl = "./sample.json";

var stage = d3.select("#happiness");

d3.json(activityUrl, function(activity) {
	d3.selectAll("rect").remove();
	d3.selectAll("rect").data(activity.map(function(a){return a.mood}))
		.enter().append("rect")
		.call(makeDaySquare);
});
