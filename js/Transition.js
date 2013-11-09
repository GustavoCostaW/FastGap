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
		$("#content").addClass(Transition.class);
	};

	Transition.End = function() {
		if (Transition.control) {
			PageLoad.transition = Transition.class;
			PageLoad.load(Navigator.currentPage);

			Transition.control = false;
                        if(!Navigator.isBack){
                            window.History.pushState(null, null, Navigator.currentPage);
                        }
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
