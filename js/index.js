$(document).ready(function(){
  $(window).scroll(function(event){
    if($(window).scrollTop() > 940){
      $("header").stop().css({"background": "#2B2B2B"}, 500);
      $("#bck").stop().animate({"opacity": "0", "display": "none"}, 500);
    }

    if($(window).scrollTop() < 920){
      $("header").stop().animate({"background": "none"}, 200);
      $("#bck").stop().animate({"opacity": "1", "display": "block"}, 200);
    }
	});


  //Hamburger menu
  document.querySelector("header nav img:nth-child(1)").addEventListener('click', function(){
      document.querySelector("header nav").style.background = "#2B2B2B";
      document.querySelector("header nav").style.padding = "6px";
      document.querySelector("header nav img:nth-child(1)").style.display = "none";
      document.querySelector("header nav img:nth-child(2)").style.display = "block";
      document.querySelector("header nav ul").style.visibility = "visible";
  });

  document.querySelector("header nav img:nth-child(2)").addEventListener('click', function(){
      document.querySelector("header nav").style.background = "none";
      document.querySelector("header nav").style.padding = "0";
      document.querySelector("header nav img:nth-child(2)").style.display = "none";
      document.querySelector("header nav img:nth-child(1)").style.display = "block";
      document.querySelector("header nav ul").style.visibility = "hidden";
  });  
});
