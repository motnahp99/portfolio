$(document).ready(function () {

    /* header 로고 이미지 변경 */
    $("#header").mouseenter(function () {
        $("h1 img").attr("src", "images/common/logo_b.png");
    });
    $("#header").mouseleave(function () {
        $("h1 img").attr("src", "images/common/logo_w.png");
    });

    /* header depth2 */
    $(".depth2_bg,.depth2").hide();
    $(".gnb>li").mouseenter(function () {
        $(".depth2_bg").stop().fadeIn();
        $(".depth2").stop().fadeIn();
    });
    $(".gnb>li").mouseleave(function () {
        $(".depth2_bg").stop().fadeOut();
        $(".depth2").stop().fadeOut();
    });
});