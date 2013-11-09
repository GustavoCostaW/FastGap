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
		currentPage : '',
                isBack : false
	};
	
	Navigator.loadPage = function(){
		Transition.control = true;
		Navigator.currentPage = $(this).data("url");
                Transition.class = Transition.getClassAnimation(Navigator.currentPage);
		Transition.start();		
	};
	

})(window);
