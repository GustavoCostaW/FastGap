/* FASTGAP https://github.com/GustavoCostaW/FastGap */

(function(window) {

    // page load object
    var PageLoad = window.PageLoad = {
        ajxHandle: null
    };

    //load ajax 
    PageLoad.load = function(page) {
        PageLoad.ajxHandle = $.get("pages/" + page, PageLoad.success);
    };
    //sucess load
    PageLoad.success = function(content) {
        // add content in #page
        FG.$content.html(content);

        //scroll
        FG.$content.height(window.innerHeight - FG.$headerApp.height());
        FG.myScroll = new IScroll(FG.elContent, {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true
        });

        Transition.hideMenu();
        FG.$content.removeClass(Transition.class);
    };


})(window);