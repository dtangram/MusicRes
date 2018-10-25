$(document).ready(function(){
  var nameInput = $(".name");
  var emailInput = $(".email");
  var passwordInput = $(".password");
  var errorName = $(".errorName");
  var errorEmail = $(".errorEmail");
  var errorPassword = $(".errorPassword");

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



  // FORM VALIDATION
  nameInput.focus();
  $("#signin form .email").focus();

  nameInput.focusout("blur", checkName, false);
  emailInput.focusout("blur", checkEmail, false);
  passwordInput.focusout("blur", checkPassword, false);

  //NAME VALIDATION
  function checkName(){
    if(this.value.length <= 0){
      nameInput.css("border", "solid 2px #FF0000");
      errorName.html("Enter your name");
    }

    else{
      nameInput.css("border", "0");
      errorName.html("");
    }
  }

  //EMAIL VALIDATION
  function checkEmail(){
    if(this.value.length <= 0){
      emailInput.css("border", "solid 2px #FF0000");
      errorEmail.html("Enter your email address");
    }

    else if(this.value.length > 0 && this.value.length < 12){
      emailInput.css("border", "solid 2px #FF0000");
      errorEmail.html("Not a valid email address");
    }

    else{
      emailInput.css("border", "0");
      errorEmail.html("");
    }
  }

  //PASSWORD VALIDATION
  function checkPassword(){
    if(this.value.length <= 0){
      passwordInput.css("border", "solid 2px #FF0000");
      errorPassword.html("Create a password");
    }

    else if(this.value.length < 8){
      passwordInput.css("border", "solid 2px #FF0000");
      errorPassword.html("Password must have 8 characters");
    }

    else{
      passwordInput.css("border", "0");
      errorPassword.html("");
    }
  }
  //




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
