// CODIGO CRIADO POR GUSTAVO COSTA - @GustavoCostaW

//ms
var transitionSpeed = 160;

//easing default
var easing = "snap";

//effects array
var effects = new Array();

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
		}

		function startApp(){
			//ajax load home open first time
			$.get("pages/home.html",function(data){
				//add content in #page
				$("#page").html(data);
				//call events
				events();
			});
		}

		//events
		function events(){
		    //listener buttons menu .botoes-app class
			$("#page").on('click','.botoes-app',function(){

				/* effects, for select one effect, define one effect[0] and effect[1] 
				view more on http://ricostacruz.com/jquery.transit/ */ 
				switch($(this).data("url")) {
					//pg1
					case "page1.html" :
					effects[0] = {opacity:0};
					effects[1] = {opacity:1};
					break;
					//pg2
					case "page2.html" :
					effects[0] = {x:window.innerWidth,opacity:0};
					effects[1] = {x:0,opacity:1};
					break;
					//pg3
					case "page3.html" :
					effects[0] = { rotateY: '180deg'};
					effects[1] = { rotateY: '0deg'};
					break;
					//pg4
					case "page4.html" :
					effects[0] = { scale:0};
					effects[1] = { scale:1};
					break;
					//pg5
					case "page5.html" :
					effects[0] = { rotate:'+=20deg',x:window.innerWidth};
					effects[1] = { rotate:'0deg',x:0};
					break;
					//default
					default:
					effects[0] = {opacity:0};
					effects[1] = {opacity:1};
					easing = "snap";
				}

				// save var in clicked button
				page = $(this).data("url");
				//transition effect one 
				$('#page').transition(effects[0],transitionSpeed,easing,function(){
					//ajax load new page
					$.get("pages/"+page,function(data){
						// add content in #page
						$("#page").html(data);

						if(page == "page1.html"){
							//carrousel starts in page 1
							$("#carrousel-app").owlCarousel({
								  items:1,
								  autoPlay:true,
							      slideSpeed : 300,
							      paginationSpeed : 400,
							      singleItem: true
							 });
						}
						else if(page == "page6.html") {
							//scrollpage
							myScroll = new iScroll('wrapper');
						}

						//how back button
						$("#voltar").show();
						// transition effect two
						$('#page').transition(effects[1],transitionSpeed,easing,function(){
							//callback event 
						});
					})
				});
			});

			// back button clicked
			$("#voltar").click(function(){
				//back button hide
				$("#voltar").hide();
				//effect one
				$('#page').transition( effects[0] ,transitionSpeed,easing,function(){
					//load home page
					$.get("pages/home.html",function(data){
						// add content in #page
						$("#page").html(data);
						// effect two
						$('#page').transition(effects[1],transitionSpeed,easing,function(){
							//callback event
						});
					})
				});			
			});

		}
		//start init
		init();
	}

	//start my app
	myApp = new myApp();

})

