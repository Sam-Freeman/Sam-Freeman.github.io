/**
*   Created by SamuelFreeman - W/\VE on 9/4/2017
*
*/


$(document).ready(function() {
    // Shows new text on click
    $("._container").click(function() {

        var t = $(this);
        var s = $(this).children("p");
        var h = $(this).children("h2");

        if (h.text == "Future") {
          t.css("margin-left", "50%");
        }


        if (s.text() == s.data("text-description")) {
            s.text(s.data("text-blank"));
            h.text(h.data("text-mainTitle"));
            t.css("border-radius", "50%");
            t.css("width", "20%");
        } else {
            h.data("text-mainTitle", h.text());
            h.text("");
            s.data("text-blank", s.text());
            s.text(s.data("text-description"));
            t.css("border-radius", "3%");
            t.css("width", "50%");
        }


    });
});
