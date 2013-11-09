/**
 * Load Pages
 * @author Alexsandro Souza <apssouza22@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

;
(function(window, undefined) {
	"use strict";

	// Localise Globals
	var PageLoad = window.PageLoad = {
		ajxHandle: null
	};
	
	
	PageLoad.load = function(page) {
		PageLoad.ajxHandle = $.get("pages/" + page, PageLoad.success);
	};

	PageLoad.success = function(content) {
		// add content in #page
		FG.$content.html(content);
		
		//scroll
		FG.$content.height(window.innerHeight - FG.$headerApp.height());

		FG.myScroll = new IScroll(FG.elContent, {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true
		});
		
		Transition.hideMenu();
		
		FG.$content.removeClass(Transition.class);
	};
	

})(window);
