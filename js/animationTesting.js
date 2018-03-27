$(document).ready(function(){
    $("#test").click(function () {
        $(this).toggleClass("rotate");
        $(this).animate({
            opacity: 0.0,
            top: "-=50vh",
        }, 1000, function() {
            $("h1").fadeIn("slow");
        });
    });
});
