// FASTGAP - GUSTAVO COSTA - @GustavoCostaW

//effects class
var transitionClass;
//controll transitions
var transitionControl = true;

//events
function transitions(){
		
	

    // swipe
    Hammer(document).on("swipeleft",function(){
        if($("#menu").hasClass("transitionMenuAppStart")){
        	transitionControl = false;
            showMenu();
        }
    });
    Hammer(document).on("swiperight",function(){
        if(!$("#menu").hasClass("transitionMenuAppStart")){
        	transitionControl = false;
            showMenu();
        }
    });

    //effects in menu
    function showMenu(){
        if(!$("#menu").hasClass("transitionMenuAppStart")){
            $('#content,#header-app').addClass("transitionContentAppStart"); 
            $('#menu').addClass("transitionMenuAppStart");               
        }
        else{
            $("#menu").removeClass("transitionMenuAppStart");
            $('#content,#header-app').removeClass("transitionContentAppStart");
        }
    }
}