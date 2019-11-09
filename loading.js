$(document).ready(function() {
	
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})
	
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 60000);
})
