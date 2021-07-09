$(document).ready(function(){

    
    $("#svg1").mouseenter(function(){

        $("#Huesos").fadeTo("fast", 1);
      });
    
      $("#svg1").mouseleave(function(){
        $("#Huesos").fadeTo("fast", 0);
      });
    })