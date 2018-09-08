$(document).ready(function () {

    $("#poets-slider").owlCarousel({
        // autoPlay: true,
        // stopOnHover: true,
        // slideSpeed: 200,
        // paginationSpeed: 800,
        // rewindSpeed: 1000,
        // navigationText: ["prev", "next"],
        // rewindNav: true,
        // singleItem: true,
        // transitionStyle: "backSlide",
        // responsive: true,
        // responsiveRefreshRate: 200,
        // responsiveBaseWidth: window,
        rtl: true,
        items: 1,
        margin: 32,
        stagePadding: 30,
        smartSpeed: 450,

    });

    $(".content-slider").owlCarousel({
        rtl: true,
        items: 1,


        smartSpeed: 450,
    });


var worker = $('#workers');

var tabItem = $('.tab-menu li',worker);
var tabs = $('.tab-wrapper .tab-item',worker);
tabItem.on('click',function(){
        $(tabItem).removeClass('active');
        var clicked = $('a',this).data('item');
        $(tabs).removeClass('active');
        $(clicked).addClass('active');
        $(this).addClass('active');
});

});