(function($) {
	'use strict';	
            var win = $(window),
                foo = $('.typer');

            foo.typer([
				'Creative agency',
				'Freelance designer',
				'Portfolio gallery',
			]);

            // unneeded...
            win.resize(function(){
                var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
            }).resize();
})(jQuery);