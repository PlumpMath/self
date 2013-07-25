var activityUrl = "http://papill0n.org/happiness.json";

var stage = d3.select("#happiness");

d3.json(activityUrl, function(activity) {
	stage.selectAll("rect").remove();
	stage.selectAll("rect").data(activity)
		.enter().append("rect")
		.call(makeDaySquare);
});
