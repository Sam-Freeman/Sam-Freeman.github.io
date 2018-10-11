/**
 * Created by SamuelFreeman - W/\VE 1/9/2016.
*/
// Script displays time.

function timeDisplay() {
    var date = new Date();
    var current_hour = date.getHours();
    var current_minute = addZeroToTime(date.getMinutes());
    var current_second = addZeroToTime(date.getSeconds());
    document.getElementById("timeDisplayer").innerHTML = current_hour + ":" + current_minute + ":" + current_second;
    var timeOut = setTimeout(timeDisplay, 500);
}

function addZeroToTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}