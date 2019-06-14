$(document).ready(function () {
    if (scrollY > 100) {
        $("header #const").css("background-color", "black");
        $(".navbar-brand").attr("style", "color: black !important");
        $(".navbar-nav .nav-link ").attr("style", "color: black !important");
    } else {
        $("header #const").css("background-color", "");
        $(".navbar-brand").attr("style", "");
        $(".navbar-nav .nav-link ").attr("style", "");
    }

    $(window).scroll(function () {
        if (scrollY > 100) {
            $("#const").addClass("tes")
            $("header #const").css("background-color", "white");
            $(".navbar-brand").attr("style", "color: black !important");
            $(".navbar-nav .nav-link ").attr("style", "color: black !important");
        } else {
            $("#const").removeClass("tes");
             $("#const").addClass("tes1")
            $("header #const").css("background-color", "");
            $(".navbar-brand").attr("style", "");
            $(".navbar-nav .nav-link ").attr("style", "");
        }
    })



    $(".up").click(function () {
        $(window).scrollTop(0);
    })

})













