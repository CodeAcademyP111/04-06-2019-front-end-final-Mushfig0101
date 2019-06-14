$(document).ready(function () {
    // $(".true").hover(function () {

    //     $(this).addClass("activeI");
    //     //    $("#ule").children().children().children().eq(1).removeClass("disnone");
    //     $(".true").next().css("top", "0px");
    //     //    $(this).css("transition","0.5s");

    // },

    //     function () {
    //         // $("#ule").children().children().children().eq(1).addClass("disnone");
    //         $(".true").next().css("top", "20px");
    //         $(this).removeClass("activeI");
    //     });


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
    $(".up").click(function(){
       $(window).scrollTop(0);
    })

  // button click function Start
    $(".mycloud").click(function(){
        $(".color1").parent().css({
            "background-color":"#0333e8",
            "border-color":"#0333e8",
            "outline":"none",
            "color":"white"
        })
        // console.log(this);
    })

    //end 
    //button light click events start
    $(".myrss").click(function(){
        $(".color2").parent().css({
            "background-color":"black",
            "color":"white"
        })
    })


// $(".action_dark").click(function(){
//     $(".color3").parent().css({
//         "background-color":"#2347c7",
//         "border":"1px solid #2347c7",
//         "color":"white"
//     })
// })

$(document).on("click",".action_dark",function()
{
   
        $(".color3").parent().css({
            "background-color":"#2347c7",
            "border":"1px solid #2347c7",
            "color":"white"
        })
    
});
// sigortalanmaq $(document).on("click",".action_dark",function(){})
// let toggle = false;
// $(document).on("click", ".action_light",function()
// {
//     if(!toggle){
//         $(".color5").parent().css({
//             "background-color":"#2347c7",
//             "border":"1px solid #2347c7",
//             "color":"white"
//     });
//     toggle = true;
//     }else{
//         $(".color5").parent().css({
//             "background-color":"white",
//             "border":"1px solid #2347c7",
//             "color":"black"});
//             toggle = false;
//     };

// });



$(document).on("click", ".action_darkoutline",function()
{
    $(".color6").parent().css({
        "background-color":"black",
        "border":"1px solid black",
        "color":"white"
        
    })
});


})
