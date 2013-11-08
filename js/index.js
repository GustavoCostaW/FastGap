// FASTGAP - GUSTAVO COSTA - @GustavoCostaW


/* GLOBAL VARS */

//Scroll
var myScroll;
//current this
var currentThis;
// ajax pages
var ajxPages;

//starts app
$(document).ready(function(){
	var first = true;
	myApp = function(){
		
		function init(){
			//startApp
			startApp();
		}

		function startApp(){
			// startApp in AppController.js
			new AppController().initialize();
			FG.init();
			History.bind('popstate', historyBack );
		}
		
		function historyBack(){ 
				if(first){ 
					first = false;
					return;
				} 
				
				var page = location.href
						.split('/').pop();
								
				//ajax load new page
				ajxPages = $.get("pages/"+page,function(data){
					// add content in #page
					$("#content").html(data);
					//scroll
            		$("#content").height(window.innerHeight-$("header#header-app").height());
            		myScroll = new IScroll('#content',{ scrollbars: true, mouseWheel: true, interactiveScrollbars: true });
				    
				    //back menu
            		$("#menu").removeClass("transitionMenuAppStart");
            		$('#content,#header-app').removeClass("transitionContentAppStart");
					//back transition effect  two
            		$('#content').removeClass(transitionClass);
				});
			transitionControl = false;
			
		}
		
		//start init
		init();
	}
	
	//start 
	myApp = new myApp();

})

