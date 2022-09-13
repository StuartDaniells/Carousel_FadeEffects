// Stuart Daniells
// C0829441

$(document).ready(function() {
	
	let slider = $("#image_list");                     // slider = ul element
	let leftProperty, newleftProperty = 0;

	// enlarged image slide in effect, and
	// assign the selected carousel image url's to the enlarged image
	function slideInAnimation (anchorObj) {
		let listSrc = $(anchorObj).find(">img").attr("src");
		let listAlt = $(anchorObj).find(">img").attr("alt");

		$("#image").attr("src", listSrc);
		$("#image").attr("alt", listAlt);

		// animation for the new image slide in
		$("#image").animate( {opacity: 1, 'margin-left': 105}, 1000);
	};

	// enlarged image slide out effect
	$("li a").click(function(evt) {
		/* adding opacity to 0 and margin-left by 205px over 1 second */
		$("#image").animate( {opacity: 0, 'margin-left': -105}, 1000);
		
		// new image slide in effect after waiting for 1 second
		setTimeout(() => slideInAnimation(this), 1000);
		
		// cancel the default action of the link
		evt.preventDefault();  // jQuery cross-browser method
	});
	
	// the click event handler for the right button						
	$("#right_button").click(function() { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));

		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; 
		}
		else {
			newLeftProperty = leftProperty - 300; 
		}

		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click(function() {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		}
		else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click	
	
}); // end ready