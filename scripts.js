$(document).ready(function(){   
      $(".hidden-hi").hide();  


      $("#menuItem-2").click(function(){
        $(".product").hide();
      });



      $("#menuItem-4").click(function(){
      $(".hidden-hi").show();
      });

});


  $(document).ready(function(){
    $("#menuItem-3").mouseover(function(){
      $("h5").addClass("yellow");
     
    });
  });