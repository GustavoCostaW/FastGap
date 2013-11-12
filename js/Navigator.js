/* FASTGAP https://github.com/GustavoCostaW/FastGap */

(function(window) {
    //navigator object
    var Navigator = window.Navigator = {
        control: true,
        currentPage: '',
        isBack: false
    };
    //load page
    Navigator.loadPage = function() {
        Transition.control = true;
        Navigator.currentPage = $(this).data("url");

        if (FG.currentController != null){
            // unset everything in the previous controller
            // prevent memory leaks
            FG.currentController.destroy();
        }

        // create new controller
        switch(Navigator.currentPage){
            case 'page1.html':
                FG.currentController = new Page1Controller();
            break;
            case 'page2.html':
                FG.currentController = new Page2Controller();
            break;
            case 'page3.html':
                FG.currentController = new Page3Controller();
            break;
            case 'page4.html':
                FG.currentController = new Page4Controller();
            break;
            default:
                alert('No controller found.');
            break;
        }

        // once new controller created, initialize it
        if (FG.currentController != null){
            FG.currentController.initialize();
        }

        Transition.class = Transition.getClassAnimation(Navigator.currentPage);
        Transition.start();
    };


})(window);