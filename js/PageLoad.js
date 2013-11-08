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
		ajxHandle: null,
		transition : null
	};
	
	
	PageLoad.load = function(page) {
		PageLoad.ajxHandle = $.get("pages/" + page, PageLoad.success);
	};

	PageLoad.success = function(content) {
		// add content in #page
		$('#content').html(content);
		
		//scroll
		$('#content').height(window.innerHeight - $("header#header-app").height());

		FG.myScroll = new IScroll(FG.elContent, {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true
		});
		
		Transition.backMenu();
		
//		PageLoad.animate();
		$("#content").removeClass(PageLoad.transition);
	};
	

})(window);
