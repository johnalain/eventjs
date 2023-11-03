// https://www.youtube.com/watch?v=ZRupJrMllAQ
$(document).ready(function () {
  //fade in with timer 2s and function perform action after the timer finish
  // $("button").click(function()
  // {
  //     $("div").fadeIn(20000,function(){$("span").show();});
  //     //fadeIn(speed,callbackfunction)
  // });
  //fade out after the timer expired then perform show()action of span

  //
  $("button").click(function () {
    $("p").hide(3000, alert("paragraph is hidden"));
    $("button").css("color","#f00")
  });
});
