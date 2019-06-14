

var topic = ["Halo","Overwatch","Mariokart","LegendofZelda"]


function displayGifButtons() {
	$("#gifButtonsView").empty();
	for (var i = 0; i < topic.length; i++) {
		var gifButton = $("<button>");
		gifButton.addClass("game");
		gifButton.addClass("btn btn-primary")
		gifButton.attr("data-name", topic[i]);
		gifButton.text(topic[i]);
		$("#gifButtonsView").append(gifButton);
		console.log(thisgit)
    }
}
function displayGifs() {
	console.log($(this).attr("data-name"))
	var game = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";
	
	$.ajax({
		url: queryURL,
		method: 'GET'
	})

	.done(function(response) {
		console.log(response)
		$("#gifsView").empty();
		var results = response.data;
		if (results == ""){
			alert("There is not a giffy for this!");	
        } 
		for (var i = 0; i<results.length; i++){
			
			var gifDiv = $("<div1>");
			
			var gifRating = $("<p>").text("Rating " + results[i].rating);
			gifDiv.append(gifRating);

			
			var gifImage = $("<img>");
			gifImage.attr("src", results[i].images.fixed_height_small_still.url);
			
			gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
			
			gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
			
			gifImage.attr("data-state", "still");
			gifImage.addClass("image");
			gifDiv.append(gifImage);

			$("#gifsView").prepend(gifDiv);
		}
	});
	$(".game").on("click", function() {

		var state = $(this).attr("data-state")
		var stillUrl = $(this).attr("data-still")
		var animateUrl = $(this).attr("data-animate")
  
		if( state === "still"){
		  $(this).attr("src", animateUrl).attr("data-state","animate")
		}
		else{
		  $(this).attr("src", stillUrl).attr("data-state","still")
		}
	  });
}
        