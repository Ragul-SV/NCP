(function (window) {
    var chapter = 1;
    window.addChapter = (title, page) => {
        var str = "";
        var n = 100;
        var num = page.toString().length;
        str = chapter.toString() + ". " + title;
        for (var i = str.length; i < n; i++) {
            str += ".";
        }
        str += page.toString();
        var curContent = window.document.getElementById("body").innerHTML;
        window.document.getElementById("body").innerHTML = curContent + "<br>" + str;
        chapter += 1;
    };
})(window);

window.addChapter("A Gentle Introduction", 20);
window.addChapter("Introduction to Javascript  ", 40);
window.addChapter("Control Sentences", 100);
window.addChapter("Functions", 150);
window.addChapter("Writing Interactive Programs", 225);
window.addChapter("Conclusion", 250);
