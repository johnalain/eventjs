$(document).ready(function()
{
    //fade in with timer 2s and function perform action after the timer finish
    // $("button").click(function()
    // {
    //     $("div").fadeIn(20000,function(){$("span").show();});
    //     //fadeIn(speed,callbackfunction)
    // });
    //fade out after the timer expired then perform show()action of span

    $("button").click(function()
    {
        // $("div").fadeOut(2000,function(){$("span").show();});
        //fadeIn(speed,callbackfunction)
        $("div").fadeOut(2000,function(){$("span").hide(2000);});

    });
    });
