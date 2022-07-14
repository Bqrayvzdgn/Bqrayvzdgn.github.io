$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".btn").fadeIn();
        }
        else {
            $(".btn").fadeOut();
        }
    });

    $(".btn").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 700);
        return false;
    });

});