/* @GUSTAVOCOSTAW FASTGAP */

var AppController = function(){};

AppController.prototype = new ViewController();

AppController.prototype = {
     
     destroy: function(){
     	//destroy app
     	console.log("destroy");
     }
};