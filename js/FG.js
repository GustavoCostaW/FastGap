/**
 * Fast Gap
 * @author Alexsandro Souza <apssouza22@gmail.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

;(function(window,undefined){
	"use strict";

	// Localise Globals
	var FG = window.FG = {
		myScroll: null,
		currentThis : null,
		$menu : null
	};
	
	FG.init = function(){
		FG.$menu = $("#menu");
	};
	
	FG.backMenu = function(){
		$("#menu").removeClass("transitionMenuAppStart");
        $('#content, #header-app').removeClass("transitionContentAppStart");
	};

})(window);

