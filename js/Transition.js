/**
 * Transitions
 * @author Alexsandro Souza <apssouza22@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

;
(function(window, undefined) {
	"use strict";

	// Localise Globals
	var Transition = window.Transition = {
		control: false,
		class: 'transitionApp1'
	};

	Transition.start = function() {
		$("#content").addClass(Transition.class);
	};

	Transition.End = function() {
		if (Transition.control) {
			PageLoad.transition = Transition.class;
			PageLoad.load(Navigator.currentPage);

			Transition.control = false;
			window.History.pushState(null, null, Navigator.currentPage);
		}
	};

	Transition.backMenu = function() {
		$("#menu").removeClass("transitionMenuAppStart");
		$('#content, #header-app').removeClass("transitionContentAppStart");
	};

	Transition.showMenu = function() {
		if (!$("#menu").hasClass("transitionMenuAppStart")) {
			$('#content,#header-app').addClass("transitionContentAppStart");
			$('#menu').addClass("transitionMenuAppStart");
		} else {
			$("#menu").removeClass("transitionMenuAppStart");
			$('#content,#header-app').removeClass("transitionContentAppStart");
		}
	};

})(window);
