$(document).ready(function () {
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



    // individual slide animations-- headerde olan Slider Start
var slides = function slides(i) {
	// var _from = '#slide-1';
	var _to = '#slide-' + i;
	var bg = '#slide-' + i + ' .bg';
	var	title = '#slide-' + i + ' h1';
	var	text = '#slide-' + i + ' p';
	
	TweenLite.from(bg, 1, {scale: 1.25});
	TweenLite.from(title, 1, {y:'105px', autoAlpha:0});
	TweenLite.from(text, 1, {delay: .5, y:'105px', autoAlpha:0});
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
TweenLite.from('#slide-1 .bg', 1, {autoAlpha:0});
TweenLite.from('#slide-1 h1', 1.5, {autoAlpha:0, y: '-105px'});
TweenLite.from('#slide-1 p', 1.5, {autoAlpha:0, y: '105px'});
TweenLite.from('.previous', .5, {x: '-50px'});
TweenLite.from('.next', .5, {x: '50px'});
TweenLite.from('.flickity-page-dots', .5, {y: '105%'});

//---- headerde olan Slider End




})


