/**
 * Fast Gap
 * @author Alexsandro Souza <apssouza22@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

;
(function(window, undefined) {
	"use strict";

	// Localise Globals
	var FG = window.FG = {
		myScroll: null,
		currentThis: null,
		$menu: null,
		elContent: "#content",
		$content: null
	};

	var first = true;

	FG.init = function() {
		FG.$menu = $("#menu");
		FG.$content = $(FG.elContent);
		this.addEventListeners();
		this.definitions();
		PageLoad.load('home.html');
	};

	FG.definitions = function() {
		//fastclick, performance library of mouse events to touch events
		FastClick.attach(document.body);
		//block drag "navegator box"
		$(document).on('touchmove', function(event) {
			event.preventDefault();
		});
	};

	FG.addEventListeners = function() {
		$("#page").on('click', '.botoes-app', Navigator.loadPage);
		$("#content").on("webkitTransitionEnd transitionend MSTransitionEnd", Transition.End);
		
		$("#page").on('click',"#menu-button",Transition.showMenu);
		
		Hammer(document).on("swipeleft",Transition.showMenu);
		Hammer(document).on("swiperight",Transition.showMenu);
		
		History.bind('popstate', function() {
			if (first) {
				first = false;
				return;
			}
			var page = location.href
					.split('/').pop();

			PageLoad.load(page);
		});
	};


})(window);

