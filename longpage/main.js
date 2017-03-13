$(document).ready(function(){

  console.log("oh glorious master, your document is read!");

  var fromTop = 0;

  $(window).scroll(function(){

   fromTop = $(window).scrollTop();

   console.log("you are at" + fromTop + "px");

     })//close .scroll
   });//close .ready
