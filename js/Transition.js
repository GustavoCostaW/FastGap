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
        
        /* effects, for select one effect, create or view effects in transitions.css */
        Transition.animations = {
            'page1.html' : 'transitionApp1',
            'page2.html' : 'transitionApp2',
            'page3.html' : 'transitionApp3',
            'page4.html' : 'transitionApp4',
            'page5.html' : 'transitionApp5'
        }
        
        Transition.getClassAnimation = function(page){
            if(Transition.animations.hasOwnProperty(page)){
                return Transition.animations[page];
            }
            return Transition.class;
        }
        

	Transition.start = function() {
		FG.$content.addClass(Transition.class);
	};

	Transition.End = function() {
		if (Transition.control) {
			PageLoad.load(Navigator.currentPage);

			Transition.control = false;
                        if(!Navigator.isBack){
                            window.History.pushState(null, null, Navigator.currentPage);
                        }
		}
	};

	Transition.hideMenu = function() {
		FG.$menu.removeClass("transitionMenuAppStart");
                FG.$content.removeClass("transitionContentAppStart");
		FG.$headerApp.removeClass("transitionContentAppStart");
	};

	Transition.showMenu = function() {
		FG.$menu.addClass("transitionMenuAppStart");
                FG.$content.addClass("transitionContentAppStart");
		FG.$headerApp.addClass("transitionContentAppStart");
	};

	Transition.toggleMenu = function() {
		if (!FG.$menu.hasClass("transitionMenuAppStart")) {
			Transition.showMenu();
		} else {
			Transition.hideMenu();
		}
	};

})(window);
