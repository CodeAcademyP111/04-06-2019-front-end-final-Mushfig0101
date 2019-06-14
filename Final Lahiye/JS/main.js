$(document).ready(function () {

    AOS.init({
        duration: 1200,
    });
    headerScrollChange()

    $(window).scroll(function () {
        headerScrollChange()
    })



    // individual slide animations-- headerde olan Slider Start
    var slides = function slides(i) {
        // var _from = '#slide-1';
        var _to = '#slide-' + i;
        var bg = '#slide-' + i + ' .bg';
        var title = '#slide-' + i + ' h1';
        var text = '#slide-' + i + ' p';

        TweenLite.from(bg, 1, { scale: 1.25 });
        TweenLite.from(title, 1, { y: '105px', autoAlpha: 0 });
        TweenLite.from(text, 1, { delay: .5, y: '105px', autoAlpha: 0 });
    };

    // setup for the flickity slider
    var slideFlickity = function slideFlickity() {
        // flickity init	
        var slideList = $('.main-carousel').flickity({
            cellAlign: 'center',
            wrapAround: true,
            pageDots: true
        });

        slideClick(slideList);
    };

    var slideClick = function slideClick(slideList) {
        slideList.data('flickity').on('select', function () {
            var index = this.selectedIndex + 1;
            slides(index);
        });
    };

    // load flickity first
    slideFlickity();

    // intro animation second
    TweenLite.from('#slide-1 .bg', 1, { autoAlpha: 0 });
    TweenLite.from('#slide-1 h1', 1.5, { autoAlpha: 0, y: '-105px' });
    TweenLite.from('#slide-1 p', 1.5, { autoAlpha: 0, y: '105px' });
    TweenLite.from('.previous', .5, { x: '-50px' });
    TweenLite.from('.next', .5, { x: '50px' });
    TweenLite.from('.flickity-page-dots', .5, { y: '105%' });

    //---- headerde olan Slider End

    //start PARALAX section id name paralax

    // let span = document.querySelectorAll(".span");
    // console.log(span);


    //----------------------------------------------

    // $({ Counter: 0 }).animate({
    //     Counter: $('.Single').text()
    //   }, {
    //     duration: 1000,
    //     easing: 'swing',
    //     step: function() {
    //       $('.Single').text(Math.ceil(this.Counter));
    //     }
    //   });

    $(".span").each(function () {
        let span = $(this);
        $({ Counter: 0 }).animate({
            Counter: span.text()
        }, {
                duration: 5000,
                easing: 'swing',
                step: function () {
                    span.text(Math.ceil(this.Counter));
                }
            });
    })


    // for(let i=0; i<span.length; i++){
    //     $({ Counter: 0 }).animate({
    //         Counter:  span[i].text()
    //       }, {
    //         duration: 1000,
    //         easing: 'swing',
    //         step: function() {
    //             span[i].text(Math.ceil(this.Counter));
    //         }
    //       });
    // }


    $(".up").click(function () {
        $(window).scrollTop(0);
    })
})


var headerScrollChange = function () {

    if (scrollY > 100) {
        $("header").css("background-color", "white");
        $(".logowhite").css("display", "none")
        $(".logoblack").css("display", "block")


        $(".navbar-nav .nav-link ").attr("style", "color: black !important");

        $(".navbar .navbar-nav img").attr("style", "src", "img/logo/logo-in_page.png");

        // $(".slider").children().eq(0).attr("src", `img/lg/${img}`);

    } else {
        $("header").css("background-color", "transparent");

        $(".logoblack").css("display", "none")
        $(".logowhite").css("display", "block")


        $(".navbar-nav .nav-link ").attr("style", "");

        $(".navbar .navbar-nav img").attr("src", "");


    }
}