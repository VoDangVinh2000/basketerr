$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: true,
    loop: true,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        480: {
            items: 1,
            dots: false
        },
        782: {
            items: 2,
            dots: false
        },
        960: {
            items: 4,
            dots: false
        },
        1200: {
            items: 1,
            dots: false
        }
    }
});
});