function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h >= 12) {
        h = h - 12;
        session = "PM";
    }

    if (h == 0) h = 12;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("clock").innerText = time;

    setTimeout(showTime, 1000);
}

(function (window) {
    var min = 0;
    var sec = 0;
    var msec = 0;
    var start = null;
    var running = false;

    function startTimer(iPress) {
        if (iPress != false && running) {
            return;
        }
        if (iPress != false) {
            running = true;
        }
        if (running == false) {
            return;
        }
        msec += 1;
        if (msec == 10) {
            msec = 0;
            sec += 1;
        }

        if (sec == 60) {
            sec = 0;
            min += 1;
        }

        if (min == 60) {
            alert("Stop Watch has been running for an hour");
            return;
        }
        text_min = min < 10 ? "0" + min : min;
        text_sec = sec < 10 ? "0" + sec : sec;
        var timer = text_min + ":" + text_sec + ":" + msec;

        document.getElementById("stopwatch").innerText = timer;

        setTimeout(startTimer, 100, false);
    }

    window.startTimer = startTimer;
    window.stopTimer = function () {
        running = false;
    };

    window.resetTimer = function () {
        running = false;
        min = 0;
        sec = 0;
        msec = 0;
        document.getElementById("stopwatch").innerText = "00:00:0";
    };
})(window);

document.getElementById("startButton").addEventListener("click", window.startTimer);
document.getElementById("stopButton").addEventListener("click", window.stopTimer);
document.getElementById("resetButton").addEventListener("click", window.resetTimer);

showTime();
window.resetTimer();
