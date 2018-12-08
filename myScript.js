window.onload = function dateTime() {
    "use strict";

    setInterval(function dt() {
        document.getElementById("date").innerHTML = new Date();
    }, 1000);
};

function imgWindow() {
    "use strict";

    var pic = document.getElementById("pic");
    pic.style.display = "block";
    var x = 800;
    var y = 500;
    var url = pic.getAttribute("src");
    window.open(url,"Image","width=x,height=y,resizable=1");
}

function imgWindow1() {
    "use strict";

    var pic = document.getElementById("pic1");
    pic1.style.display = "block";
    var x = 800;
    var y = 500;
    var url = pic1.getAttribute("src");
    window.open(url,"Image","width=x,height=y,resizable=1");
}

function imgWindow2() {
    "use strict";

    var pic = document.getElementById("pic2");
    pic2.style.display = "block";
    var x = 800;
    var y = 500;
    var url = pic2.getAttribute("src");
    window.open(url,"Image","width=x,height=y,resizable=1");
}

function imgWindow3() {
    "use strict";

    var pic = document.getElementById("pic3");
    pic3.style.display = "block";
    var x = 800;
    var y = 500;
    var url = pic3.getAttribute("src");
    window.open(url,"Image","width=x,height=y,resizable=1");
}
