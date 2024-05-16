$(document).ready(function() {
    $("#page-loader").fadeOut();

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $('#mobile-menu').on('click', function() {
        $('.main-menu ul').toggleClass('show');
    });
});
