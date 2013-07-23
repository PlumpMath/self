var activityUrl = "https://gist.github.com/heyLu/66f596be0c7b518e4ebd/raw/0f9b215e6c1b7c9e79522e4b9ec5f9ba62469345/%5B"

var stage = d3.select("#happiness");

d3.json(activityUrl, function(activity) {
	d3.selectAll("rect").remove();
	d3.selectAll("rect").data(activity.map(function(a){return a.mood}))
		.enter().append("rect")
		.call(makeDaySquare);
});
