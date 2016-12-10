/**
 * Created by owen0271 on 2016/12/6.
 */
$(document).ready(function () {
    $(".image_slider").bxSlider({
        mode: 'fade',
        slideWidth: 1600,
        auto: true,
        speed: 200,
        adaptiveHeight: true,
        //captions: false,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        startSlide: 1
    });
    $('.collapse_section').hide();
    $('.resume_button').on('click', function () {
        //$(this).next().toggle();
        $(this).next().slideToggle(400);
        $(this).toggleClass('active');
        //$(this).text('Projects Viewed');
    });
    //$()
    //alert("hello world");
});