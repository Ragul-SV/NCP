(function (window) {
    window.validateDate = () => {
        var date = prompt("Enter Date in DD-MM-YYYY format");
        split = date.split("-");
        date = split[1] + "-" + split[0] + "-" + split[2];
        dateobj = new Date(date);
        var res = "";
        if (Object.prototype.toString.call(dateobj) === "[object Date]") {
            // it is a date
            if (isNaN(dateobj.getTime())) {
                // dateobj.valueOf() could also work
                res = "Invalid Date. Please Enter in specified format";
            } else {
                today = new Date(Date.now());
                if (dateobj > today) {
                    res = "Date is from the future!!";
                } else res = "Valid Date :)";
            }
        } else {
            res = "Invalid Date. Please Enter in specified format";
        }
        window.document.getElementById("body").innerHTML = res;
    };
})(window);

window.validateDate();
