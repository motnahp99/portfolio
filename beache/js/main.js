$(document).ready(function () {

    /* #course */
    $(".course_img img:not(:first-child), .course_txt ul:not(:first-child)").hide();
    $(".course_tab li:first-child").addClass("on");
    $(".course_tab li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        let idx = $(this).index();
        $(".course_img img").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
        $(".course_txt ul").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });

    /* resort */
    $(".resort_tab li:first-child").addClass("on");
    $(".resort_tab li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        let idx = $(this).index();
        $(".resort_img img").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });

    /* #facility */
    $(".facility_img img:not(:first-child), .facility_txt ul:not(:first-child)").hide();
    $(".facility_tab li:first-child").addClass("on");
    $(".facility_tab li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        let idx = $(this).index();
        $(".facility_img img").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
        $(".facility_txt ul").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });

});