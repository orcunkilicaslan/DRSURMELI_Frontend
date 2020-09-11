
/* Header Class Added */
$(document).ready(function() {
    $(".headslider").parent().find(".header").addClass( "headbiglogo" );
    $(".headtitle").parent().find(".header").addClass( "headsmalllogo" );
});
/* Header Class Added */

/* HeadTitle Content Image */
$(document).ready(function() {
    var headtitlebannerimgitem = document.querySelectorAll(".headtitlebannerimg");
    for (var i = 0; i < headtitlebannerimgitem.length; i++) {
        headtitlebannerimgitem[i].style.backgroundImage     = "url('" + headtitlebannerimgitem[i].getAttribute('data-img-url') + "')";
        headtitlebannerimgitem[i].style.backgroundSize      = headtitlebannerimgitem[i].getAttribute('data-img-size');
        headtitlebannerimgitem[i].style.backgroundPositionY = headtitlebannerimgitem[i].getAttribute('data-position-y');
        headtitlebannerimgitem[i].style.backgroundPositionX = headtitlebannerimgitem[i].getAttribute('data-position-x');
        headtitlebannerimgitem[i].style.height              = headtitlebannerimgitem[i].getAttribute('data-cont-height') + "px";
    }
});
/* HeadTitle Content Image */

/* Head Home Slider */
$('.headsliderowl').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 1,
    margin: 0,
    autoWidth: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive:{
        0:{},
        819:{},
        1059:{},
        1379:{},
        1619:{},
        1939:{}
    }
});
/* Head Home Slider */

/* Home Procedures */
$(document).ready(function() {
    var proceduresitem = document.querySelectorAll(".proceduresimg");
    for (var i = 0; i < proceduresitem.length; i++) {
        proceduresitem[i].style.backgroundImage     = "url('" + proceduresitem[i].getAttribute('data-img-url') + "')";
        proceduresitem[i].style.backgroundSize      = proceduresitem[i].getAttribute('data-img-size');
        proceduresitem[i].style.backgroundPositionY = proceduresitem[i].getAttribute('data-position-y');
        proceduresitem[i].style.backgroundPositionX = proceduresitem[i].getAttribute('data-position-x');
    }
});

$('.homeproceduresowl').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    items: 5,
    margin: 0,
    autoWidth: false,
    mouseDrag: true,
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutUp',
    center: true,
    responsiveClass: true,
    responsive:{
        0:{},
        819:{},
        1059:{},
        1379:{},
        1619:{},
        1939:{}
    }
});
/* Home Procedures */

/* Before and After Gallery  */
$('.beforeaftergalleryowl').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    items: 3,
    margin: 0,
    autoWidth: false,
    mouseDrag: true,
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutUp',
    center: true,
    responsiveClass: true,
    responsive:{
        0:{},
        819:{},
        1059:{},
        1379:{},
        1619:{},
        1939:{}
    }
});
/* Before and After Gallery  */

/* Testimonial Comment Slider */
$('.testimonialcommentowl').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 1,
    margin: 0,
    autoWidth: false,
    mouseDrag: true,
    responsiveClass: true,
    responsive:{
        0:{},
        819:{},
        1059:{},
        1379:{},
        1619:{},
        1939:{}
    }
});
/* Testimonial Comment Slider */