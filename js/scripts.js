// CODIGO CRIADO POR GUSTAVO COSTA - @GustavoCostaW

//ms
var transitionSpeed = 150;
//effects array
var effects = new Array();

//função que carrega app
$(document).ready(function(){

	var myApp = function(){

		function init(){

			//definitions
			definitions();
			//startApp
			startApp();

		}

		function definitions(){
			//esconde o botão voltar.
			$("#voltar").hide();
			//fastclick, biblioteca pra performance de touch e click
			FastClick.attach(document.body);
			//bloqueia arrastamento de box
			$(document).on('touchmove', function(event) {
			    event.preventDefault();
			});
		}

		function startApp(){
			//ajax que carrega o menu assim que o app anre
			$.get("pages/home.html",function(data){
				//pega o conteudo da página menu e coloca na div page
				$("#page").html(data);
				//chama a função events que está logo abaixo
				events();
			});
		}

		// função que é chamada acima quando o ajax do menu é carregado
		function events(){
		    //evento que chama click dos botoes, no caso a classe botoes-app
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
					effects[1] = { rotateY: '1deg'};
					break;

				}

				//variavel que guarda botao clicado
				var btn = $(this);
				// guardo a pagina html do elemento.
				page = btn.data("url");
				//evento de transicao da pagina para tirar da tela
				$('#page').transition(effects[0],transitionSpeed,function(){
					//ajax da pagina
					$.get("pages/"+page,function(data){
						// coloca conteudo carregado via ajax no elemento
						$("#page").html(data);

						//mostra botão voltar
						$("#voltar").show();
						// volta a div ao centro
						$('#page').transition(effects[1],transitionSpeed,function(){
						});
					})
				});
			});

			// quando botão voltar for clicado
			$("#voltar").click(function(){
				//esconde botão voltar
				$("#voltar").hide();
				//tira página da tela
				$('#page').transition( effects[0] ,transitionSpeed,function(){
					//ajax da pagina
					$.get("pages/home.html",function(data){
						// coloca conteudo carregado via ajax no elemento
						$("#page").html(data);
						// volta a div ao centro
						$('#page').transition(effects[1],transitionSpeed,function(){
							
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

