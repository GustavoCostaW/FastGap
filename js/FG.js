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
        elContent: "#content",
        $menu: null,
        $content: null,
        $headerApp: null
    };

    var first = true;

    FG.init = function() {
        FG.setDomElements();
        this.addEventListeners();
        this.definitions();
        PageLoad.load('home.html');
    };

    FG.setDomElements = function() {
        FG.$menu = $("#menu");
        FG.$content = $(FG.elContent);
        FG.$headerApp = $('#header-app');
    }

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
        FG.$content.on("webkitTransitionEnd transitionend MSTransitionEnd", Transition.End);

        $("#page").on('click', "#menu-button", Transition.toggleMenu);

        Hammer(document).on("swipeleft", Transition.toggleMenu);
        Hammer(document).on("swiperight", Transition.toggleMenu);

        History.bind('popstate', function() {
            if (first) {
                first = false;
                return;
            }
            Navigator.currentPage = location.href
                    .split('/').pop();

            if (Navigator.currentPage.indexOf('.htm') < 0) {
                return false;
            }

            Navigator.isBack = true;

            Transition.control = true;
            Transition.class = Transition.getClassAnimation(Navigator.currentPage);
            Transition.start();
        });
    };


})(window);

