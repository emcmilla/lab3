'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".jumbotron p").addClass("active");
	$("#testjs").click(function(e) {
		$("a.thumbnail").click(projectClick);
		$('.jumbotron h1').text("Javascript Loaded");
		//$('.jumbotron #testjs').text("All good");
		$("#testjs").text("Please Wait");
		$(".jumbotron p").toggleClass("active");
	});

	function projectClick(e) { 
			console.log("Project Clicked");
	    // prevent the page from reloading 
	    e.preventDefault();
	    // In an event handler, $(this) refers to 
	    // the object that triggered the event 
	    $(this).css("background-color", "#7fff00");

			var containingProject = $(this).closest(".project");
    	var description = $(containingProject).find(".project-description");
    	if (description.length == 0) {
       	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    	} else {
       	description.fadeToggle();
    	}
	}
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
