(function (window) {
    var rows = prompt("Enter rows");
    var cols = prompt("Enter cols");

    window.printTable = () => {
        var res = "<table cellpadding = '5px' border = '1px' border-collapse >";
        for (var i = 1; i <= rows; i++) {
            res += "<tr>";
            for (var j = 1; j <= cols; j++) {
                if (i === 1 || j === 1) {
                    res += "<th>" + (i * j).toString() + "</th>";
                } else {
                    res += "<td>" + (i * j).toString() + "</td>";
                }
            }
            res += "</tr>";
        }
        res += "</table>";
        window.document.getElementById("body").innerHTML = res;
    };
})(window);

window.printTable();
