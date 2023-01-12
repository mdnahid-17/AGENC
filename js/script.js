$(function () {
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: true,
        dots: true
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    $('.client-profaile').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".right",
        nextArrow: ".left",
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '0px',

    });

    //RESPONSIVE START

    $('.client-profaile-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        prevArrow: ".right",
        nextArrow: ".left",
        pauseOnHover: true,
        centerMode: true,
        centerPadding: '0px',

    });


})