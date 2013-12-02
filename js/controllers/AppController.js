var AppController = function(){};

AppController.prototype = {
     initialize:function(){
      	console.log("app ready, your app code here");
     },
     destroy: function(){
         // unset events
         // stop ajax
         // destroy components
         FG.scroll = null;
         PageLoad.ajxHandle = null;
     }
};