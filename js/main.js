$(function() {

	var current = $('.pages li.page');

	current.first().addClass('active');
	current.on('click', function(e) {
		e.preventDefault();
		current.removeClass('active');
		$(this).addClass('active');
	});

});