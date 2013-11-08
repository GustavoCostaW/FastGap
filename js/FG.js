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
		$menu : null,
		elContent : "#content",
		$content : null
	};
	
	FG.init = function(){
		FG.$menu = $("#menu");
		FG.$content = $(FG.elContent);
		this.addEventListeners();
	};
	
	
	
	FG.addEventListeners = function(){
		$("#page").on('click','.botoes-app', Navigator.loadPage);
		//transition effect for webkit and ms
		$("#content").on("webkitTransitionEnd transitionend MSTransitionEnd",Transition.End);
	};
	

})(window);

