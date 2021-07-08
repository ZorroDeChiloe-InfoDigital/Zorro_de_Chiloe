$(document).ready(function(){

    var anatomia=$("#anatomiasvg")
  
    anatomia.mouseenter(function(){

        $(this).fadeTo("fast", 0);
      });
    
    anatomia.mouseleave(function(){
        $(this).fadeTo("fast", 1);
      });
    })