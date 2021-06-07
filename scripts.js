$(document).ready(function(){   
      $(".hidden-hi").hide();  


      $("#menuItem-2").click(function(){
        $(".product").hide();
      });



      $("#menuItem-4").click(function(){
      $(".hidden-hi").show();
      });

      $("#menuItem-3").mouseover(function(){
        $("h5").addClass("yellow");
       
      });


});


  $(document).ready(function(){
    var count = 1;
    $(".icon-menu").click(function(){
      if(count === 1){
        $(".show-hidde").animate({
          left: "0"
        })
        count = 0;

      }else{
        $(".show-hidde").animate({
          left: "-100%"
        })
        count = 1;
      }
      
     
    });
  });