$(window).load(function() {
    $('#slider').nivoSlider();
});
$(function() {
    $("#tabs").tabs({
        beforeLoad: function(event, ui) {
            ui.jqXHR.fail(function() {
                ui.panel.html(
                        "Couldn't load this page. We'll try to fix this as soon as possible.");
            });
        }
    });
});
$(function() {
    SyntaxHighlighter.all();
});
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 210,
        itemMargin: 1,
        start: function(slider1) {
            $('body').removeClass('loading');
        }
    });
});
