(function() {
    setTimeout(function() {
	    $("#spaceship").addClass("show");
	}, 500);
    setTimeout(function() {
	    $("#spaceship").addClass("zoom");
	}, 2000);
    setTimeout(function() {
	    $("#overlay").addClass("fade");
	}, 3000);
	setTimeout(function() {
	    $("#overlay").css("display","none");
	}, 4000);

})();

