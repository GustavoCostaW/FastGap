/**
 * Navigator
 * @author Alexsandro Souza <apssouza22@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

;
(function(window, undefined) {
	"use strict";

	// Localise Globals
	var Navigator = window.Navigator = {
		control : true,
		currentPage : ''
	};
	
	Navigator.loadPage = function(){
		Transition.control = true;
		Navigator.currentPage = $(this).data("url");
		
		/* effects, for select one effect, create or view effects in transitions.css */
		switch(Navigator.currentPage) {
			//pg1
			case "page1.html" :
				Transition.class  = "transitionApp1";
			break;
			//pg2
			case "page2.html" :
				Transition.class = "transitionApp2";
			break;
			//pg3
			case "page3.html" :
				Transition.class = "transitionApp3";
			break;
			//pg4
			case "page4.html" :
				Transition.class = "transitionApp4";
			break;
			//pg5
			case "page5.html" :
				Transition.class = "transitionApp5";
			break;
				Transition.class = "transitionApp1";
			default:
				
		}

		Transition.start();		
	};
	

})(window);
