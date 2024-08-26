$(document).ready(function () {

    const slide1 = new Swiper('.slide1', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    const slide2 = new Swiper('.slide2', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    const slide3 = new Swiper('.slide3', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 3.5,
        spaceBetween: 30,
        speed: 1000,

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
    });

    const slide4 = new Swiper('.slide4', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    //depth2
    $(".depth2, .depth2_bg").hide();
    $(".gnb>li").hover(function () {
        $(this).find(".depth2").stop().fadeToggle()
        $(".depth2_bg").stop().fadeToggle()
    });

    //search
    $(".search").hide();

    $(".search_button1").click(function () {
        $(".search").fadeIn();
        $(".search_button1").animate({
            "opacity": "0"
        });
        $(".search_button2").animate({
            "z-index": "1",
            "opacity": "1"
        });
    });

    $(".search_button2").click(function () {
        $(".search").fadeOut();
        $(".search_button1").animate({
            "opacity": "1"
        });
        $(".search_button2").animate({
            "z-index": "-1",
            "opacity": "0"
        });
    });

    //menu 탭 넘기기
    $(".menu_sandwich,.menu_coffee").hide();

    $(".tab1").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".menu_donut").stop().fadeIn();
        $(".menu_sandwich,.menu_coffee").stop().fadeOut();
        $(".menu_tab .tab1 .tab_circle").stop().animate({
            "opacity": "1",
            "top": "-20px"
        });
        $(".menu_tab li:not(.tab1) .tab_circle").stop().animate({
            "opacity": "0",
            "top": "-40px"
        });
    });

    $(".tab2").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".menu_sandwich").stop().fadeIn();
        $(".menu_donut,.menu_coffee").stop().fadeOut();
        $(".menu_tab .tab2 .tab_circle").stop().animate({
            "opacity": "1",
            "top": "-20px"
        });
        $(".menu_tab li:not(.tab2) .tab_circle").stop().animate({
            "opacity": "0",
            "top": "-40px"
        });
    });

    $(".tab3").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".menu_coffee").stop().fadeIn();
        $(".menu_donut,.menu_sandwich").stop().fadeOut();
        $(".menu_tab .tab3 .tab_circle").stop().animate({
            "opacity": "1",
            "top": "-20px"
        });
        $(".menu_tab li:not(.tab3) .tab_circle").stop().animate({
            "opacity": "0",
            "top": "-40px"
        });
    });
});