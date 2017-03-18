$(document).ready(function(){
  $(window).scroll(function(){
    var fromTop = $(window).scrollTop();
    console.log(fromTop);

  $("#distance").text("Here is " + fromTop +"px");

  $("#distance").css({
  "top" : 0 + fromTop * 1 +"px",
  "font-size": "20px",
  "padding-top":"20px",
  });

$("#circle").css({"top" : 0 + fromTop * 1 + "px" });

if(fromTop > 250){
  $("#person1").css({
  "display":"none"});
  }

else {
  $("#person1").css({
  "top" : 240 + fromTop * 1 + "px",
  "display":"block"});
  }
  if(fromTop > 1280){
    $("#cartop").css({
    "display":"none"});
    }

  else {
    $("#cartop").css({
    "top" : 500 + fromTop * 1 + "px",
    "display":"block"});
    }
  });//end of scroll
  });//end of .ready function
