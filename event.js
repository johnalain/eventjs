$(document).ready (function(){
    //$("button").mouseenter(function(){
        //$("p").hide();
        //$("p").css("color","#f00");
        //$(this).hide();//this means same element here is button
        //$("p").hide();// dblclick needs to click twice click only ounce to perform event
       // $("p").css("color","#f00");//mouseenter when i hover over perform event
    
       // $("button").mouseleave(function(){
            //$("p").css("color","#0f0");


    //})
    $("button").hover(
        function(){
            $(this).css("color","#f00");
            $("p").css("color","#080");
        },
        function(){
            $(this).css("color","#00f");
            $("p").css("color","#f80");
        }
        )
});
        
    
        


    




