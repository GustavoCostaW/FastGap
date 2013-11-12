var Page1Controller = function(){};

Page1Controller.prototype = {
     initialize:function(){
      
     },
     destroy: function(){
         // unset events
         // stop ajax
         // destroy components
         FG.scroll = null;
         PageLoad.ajxHandle = null;
     }
};