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
		$content: null,
		transition : null,
		elContent : "#content"
	};
	
	PageLoad.init = function (){
		PageLoad.$content = $(PageLoad.elContent);
	};
	
	PageLoad.load = function(page) {
		PageLoad.$content.html('');
		PageLoad.ajxHandle = $.get("pages/" + page, PageLoad.success);
	};

	PageLoad.success = function(content) {
		// add content in #page
		PageLoad.$content.html(content);
		//scroll
		PageLoad.$content.height(window.innerHeight - $("header#header-app").height());

		FG.myScroll = new IScroll(PageLoad.elContent, {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true
		});

		FG.backMenu();
		PageLoad.animate();
	};
	
	PageLoad.animate = function(){
		PageLoad.$content.removeClass(transitionClass);
	}

})(window);
