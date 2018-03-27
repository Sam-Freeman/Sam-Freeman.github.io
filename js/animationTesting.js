$(document).ready(function(){
    $("#test").click(function () {
        $("#test").toggleClass("rotate");
        $("#test").animate({
            opacity: 0.0,
            top: "-=50vh",
        }, 1000);
    });
});
