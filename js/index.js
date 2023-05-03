$(function() {
    $(window).on("load scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            //remove the background property, so it comes transparent again (defined in your css)
            $(".navbar").removeClass("scrolled");
        }
    });
});