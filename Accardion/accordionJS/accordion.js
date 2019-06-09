$(document).ready(function () {
    $(".true").hover(function () {

        $(this).addClass("activeI");
        //    $("#ule").children().children().children().eq(1).removeClass("disnone");
        $(".true").next().css("top", "0px");
        //    $(this).css("transition","0.5s");

    },

        function () {
            // $("#ule").children().children().children().eq(1).addClass("disnone");
            $(".true").next().css("top", "20px");
            $(this).removeClass("activeI");
        });


    if (scrollY > 100) {
        $("header").css("background-color", "white");
        $(".navbar-brand").attr("style", "color: black !important");
        $(".navbar-nav .nav-link ").attr("style", "color: black !important");
    } else {
        $("header").css("background-color", "");
        $(".navbar-brand").attr("style", "");
        $(".navbar-nav .nav-link ").attr("style", "");
    }

    $(window).scroll(function () {
        if (scrollY > 100) {
            $("header").css("background-color", "white");
            $(".navbar-brand").attr("style", "color: black !important");
            $(".navbar-nav .nav-link ").attr("style", "color: black !important");
        } else {
            $("header").css("background-color", "");
            $(".navbar-brand").attr("style", "");
            $(".navbar-nav .nav-link ").attr("style", "");
        }
    })
  //accardion 1-cisi
    let title = document.querySelectorAll(".title")
    for (var i = 0; i < title.length; i++) {
        title[i].addEventListener("click", function() {
            if (this.children[2].style.maxHeight == "") {
                this.children[2].style.maxHeight = this.children[2].scrollHeight + "px";
                this.children[1].classList.replace("fa-plus", "fa-minus");
                // this.children[1].style.top="5%";
            } else {
                this.children[2].style.maxHeight = "";
                this.children[1].classList.replace("fa-minus", "fa-plus");
                // this.children[1].style.top="30%";
            }
        })
    }
  //2-ci accardion

  let title_shadow = document.querySelectorAll(".title_shadow")
  for (var i = 0; i < title.length; i++) {
    title_shadow[i].addEventListener("click", function() {
          if (this.children[2].style.maxHeight == "") {
              this.children[2].style.maxHeight = this.children[2].scrollHeight + "px";
              this.children[1].classList.replace("fa-plus", "fa-minus");
              // this.children[1].style.top="5%";
          } else {
              this.children[2].style.maxHeight = "";
              this.children[1].classList.replace("fa-minus", "fa-plus");
              // this.children[1].style.top="30%";
          }
      })
  }



  let title_second = document.querySelectorAll(".title_second")
    for (var i = 0; i < title_second.length; i++) {
        title_second[i].addEventListener("click", function() {
            if (this.children[3].style.maxHeight == "") {
                this.children[3].style.maxHeight = this.children[3].scrollHeight + "px";
                this.children[2].classList.replace("fa-plus", "fa-minus");
                // this.children[0].style.top="5%";
                // this.children[2].style.top="5%";
            } else {
                this.children[3].style.maxHeight = "";
                this.children[2].classList.replace("fa-minus", "fa-plus");
                // this.children[0].style.top="30%";
                // this.children[2].style.top="30%";
            }
        })
    }
    //3-cu Accardion
    //accardion 1-cisi
    let title_third = document.querySelectorAll(".title_third")
    for (var i = 0; i < title_third.length; i++) {
        title_third[i].addEventListener("click", function() {
            if (this.children[2].style.maxHeight == "") {
                this.children[2].style.maxHeight = this.children[2].scrollHeight + "px";
                this.children[1].classList.replace("fa-plus", "fa-minus");
                // this.children[1].style.top="5%";
            } else {
                this.children[2].style.maxHeight = "";
                this.children[1].classList.replace("fa-minus", "fa-plus");
                // this.children[1].style.top="30%";
            }
        })
    }

    let title_flat = document.querySelectorAll(".title_flat")
    for (var i = 0; i < title_flat.length; i++) {
        title_flat[i].addEventListener("click", function() {
            if (this.children[2].style.maxHeight == "") {
                this.children[2].style.maxHeight = this.children[2].scrollHeight + "px";
                this.children[1].classList.replace("fa-plus", "fa-minus");
                // this.children[1].style.top="5%";
            } else {
                this.children[2].style.maxHeight = "";
                this.children[1].classList.replace("fa-minus", "fa-plus");
                // this.children[1].style.top="30%";
            }
        })
    }



 // Accardion Dark
  
    let title_dark = document.querySelectorAll(".title_dark")
    for (var i = 0; i < title_dark.length; i++) {
        title_dark[i].addEventListener("click", function() {
            if (this.children[2].style.maxHeight == "") {
                this.children[2].style.maxHeight = this.children[2].scrollHeight + "px";
                this.children[1].classList.replace("fa-plus", "fa-minus");
                // this.children[1].style.top="5%";
            } else {
                this.children[2].style.maxHeight = "";
                this.children[1].classList.replace("fa-minus", "fa-plus");
                // this.children[1].style.top="30%";
            }
        })
    }

    let title_blue = document.querySelectorAll(".title_blue")
    for (var i = 0; i < title_dark.length; i++) {
        title_blue[i].addEventListener("click", function() {
            if (this.children[2].style.maxHeight == "") {
                this.children[2].style.maxHeight = this.children[2].scrollHeight + "px";
                this.children[1].classList.replace("fa-plus", "fa-minus");
                // this.children[1].style.top="5%";
            } else {
                this.children[2].style.maxHeight = "";
                this.children[1].classList.replace("fa-minus", "fa-plus");
                // this.children[1].style.top="30%";
            }
        })
    }















})
