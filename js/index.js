// FASTGAP - GUSTAVO COSTA - @GustavoCostaW


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
			//hide back button
			$("#voltar").hide();
			//fastclick, performance library of mouse events to touch events
			FastClick.attach(document.body);
			//block drag "navegator box"
			$(document).on('touchmove', function(event) {
			    event.preventDefault();
			});
			//fix bug scroll
			$("#iscroll").css("bottom",$("#page").css("top"));
		}

		function startApp(){
			//ajax load home open first time
			$.get("pages/home.html",function(data){
				//add content in #page
				$("#iscroll").html(data);
				//scroll
				myScroll = new IScroll('#iscroll',{ scrollbars: true, mouseWheel: true, interactiveScrollbars: true });
				//call events in transitions.js
				events();
			});
		}

		//start init
		init();
	}

	//start my app
	myApp = new myApp();

})

