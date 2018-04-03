/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function($){

	$(document).ready(function() {

		var config = $('body').data('config') || {};
		

		// Accordion menu
		$('.menu-sidebar').accordionMenu({ mode:'slide' });

		// Dropdown menu
		$('#menu').dropdownMenu({ mode: 'slide', dropdownSelector: 'div.dropdown'});
		
		// Smoothscroller
		$('a[href="#page"]').smoothScroller({ duration: 500 });
		$('a[href="#mainsite"]').smoothScroller({ duration: 500 });
		$('a[href="#top-a"]').smoothScroller({ duration: 500 });
		$('a[href="#top-b"]').smoothScroller({ duration: 500 });
		$('a[href="#top-c"]').smoothScroller({ duration: 500 });
		$('a[href="#top-d"]').smoothScroller({ duration: 500 });
		$('a[href="#main"]').smoothScroller({ duration: 500 });
		$('a[href="#bottom-a"]').smoothScroller({ duration: 500 });
		$('a[href="#bottom-b"]').smoothScroller({ duration: 500 });
		$('a[href="#bottom-c"]').smoothScroller({ duration: 500 });
		$('a[href="#bottom-d"]').smoothScroller({ duration: 500 });
		$('a[href="#map"]').smoothScroller({ duration: 500 });

		// Social buttons
		$('article[data-permalink]').socialButtons(config);

	});
		
	$.onMediaQuery('(min-width: 1080px)', {
		init: function() {
			if (!this.supported) this.matches = true;
		},
		valid: function() {
			$.matchWidth('grid-block', '.grid-block', '.grid-h').match();
			$.matchHeight('top-a', '#top-a .grid-h', '.deepest').match();
			$.matchHeight('top-b', '#top-b .grid-h', '.deepest').match();
			$.matchHeight('top-c', '#top-c .grid-h', '.deepest').match();
			$.matchHeight('bottom-a', '#bottom-a .grid-h', '.deepest').match();
			$.matchHeight('bottom-b', '#bottom-b .grid-h', '.deepest').match();
			$.matchHeight('bottom-c', '#bottom-c .grid-h', '.deepest').match();
			$.matchHeight('bottom-d', '#bottom-d .grid-h', '.deepest').match();
			$.matchHeight('innertop', '#innertop .grid-h', '.deepest').match();
			$.matchHeight('innerbottom', '#innerbottom .grid-h', '.deepest').match();
		},
		invalid: function() {
			$.matchWidth('grid-block').remove();
			$.matchHeight('main').remove();
			$.matchHeight('top-a').remove();
			$.matchHeight('top-b').remove();
			$.matchHeight('bottom-a').remove();
			$.matchHeight('bottom-b').remove();
			$.matchHeight('innertop').remove();
			$.matchHeight('innerbottom').remove();
		}
	});

	var pairs = [];

	$.onMediaQuery('(min-width: 480px) and (max-width: 1080px)', {
		valid: function() {
			$.matchHeight('sidebars', '.sidebars-2 #sidebar-a, .sidebars-2 #sidebar-b').match();
			pairs = [];
			$.each(['.sidebars-1 #sidebar-a > .grid-box', '.sidebars-1 #sidebar-b > .grid-box', '#top-a .grid-h', '#top-b .grid-h','#top-c .grid-h','#top-d .grid-h', '#bottom-a .grid-h', '#bottom-b .grid-h', '#bottom-c .grid-h', '#bottom-d .grid-h', '#innertop .grid-h', '#innerbottom .grid-h'], function(i, selector) {
				for (var i = 0, elms = $(selector), len = parseInt(elms.length / 2); i < len; i++) {
					var id = 'pair-' + pairs.length;
					$.matchHeight(id, [elms.get(i * 2), elms.get(i * 2 + 1)], '.deepest').match();
					pairs.push(id);
				}
			});
		},
		invalid: function() {
			$.matchHeight('sidebars').remove();
			$.each(pairs, function() { $.matchHeight(this).remove(); });
		}
	});

	$.onMediaQuery('(max-width: 2080px)', {
		valid: function() {
			var header = $('#header-responsive');
			if (!header.length) {
				header = $('<div id="header-responsive"/>').prependTo('#header');
				$('#logo').clone().removeAttr('id').addClass('logo').appendTo(header);
				$('.searchbox').first().clone().removeAttr('id').appendTo(header);
				$('#menu').responsiveMenu().next().addClass('menu-responsive').appendTo(header);
			}
		}
	});

})(jQuery);