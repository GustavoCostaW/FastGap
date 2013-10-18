// FASTGAP - GUSTAVO COSTA - @GustavoCostaW

//APP2 DEMO


//Scroll
var myScroll;

//starts app
$(document).ready(function(){

	var myApp = function(){

		function init(){

			//definitions
			definitions();
			//startApp
			startApp();

		}

		function definitions(){
			//fastclick, performance library of mouse events to touch events
			FastClick.attach(document.body);
			//block drag "navegator box"
			$(document).on('touchmove', function(event) {
			    event.preventDefault();
			});
		}

		function startApp(){
			$("#page1").on("click",function(){
				$("#page1").transition({x:"-100%"});
				$("#page2").transition({x:"-100%"});
			});
			$("#page2").on("click",function(){
				$("#page1").transition({x:"0"});
				$("#page2").transition({x:"+100%"});
			});
		}

		//start init
		init();
	}

	//start my app
	myApp = new myApp();

})

