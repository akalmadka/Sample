// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	
	$.fixture.make("activity", 5, function(i, activity){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: $.fixture.rand( descriptions , 1)[0],
			completed: false
		}
	})
})