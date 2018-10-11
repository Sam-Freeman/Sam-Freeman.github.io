function tidy(divID_a, divID_b, divID_c) {
    var a = document.getElementById(divID_a)
    var b = document.getElementById(divID_b)
    var c = document.getElementById(divID_c)

    if (a) {
      a.className = (a.className == 'hidden') ? 'unhidden' : 'hidden';
    }
    b.className = 'hidden';
    c.className = 'hidden';
}
