$(document).ready(function() {
	$('.parallax').parallax();
});

$(document).ready(function() {
	var options = [{scrollOffset: 300}]
	$('.scrollspy').scrollspy(options);
});

// Provides hover over project tile functionality
// By calling the card's activator node in the DOM
$(function() {
    $('.card').mouseover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, 
        function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});

$('.card')
	.mouseover(
		function(e) {
			$(this).find('> .card-image > img.activator').click();
		})
	.mouseout(
		function(e) {
			$(this).find('> .card-reveal > .card-title').click();
		}
	);

