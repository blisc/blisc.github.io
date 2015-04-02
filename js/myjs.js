$('.bs-docs-sidebar').affix({
	offset: {
		top: function() {
			var c = $('.bs-docs-sidebar').offset().top,
				d = parseInt($('.bs-docs-sidebar').children(0).css("margin-top"), 10);
			return this.top = c - d
		},
	}
})
/*
$(function() {
	$('body').scrollspy({ target: '#Sidebar' });
});*/