var page = require('webpage').create();

page.viewportSize = {
  width: 1190,
  height: 2036
};

page.open("http://vipinnagpal.com/Novor%C3%A9sum%C3%A9%20_%20R%C3%A9sum%C3%A9%20Editor.html", function    (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        window.setTimeout(function () {
            //Heres the actual difference from your code...
            var bb = page.evaluate(function () {
                return document.getElementsByClassName("yna_xywszab_x")[0].getBoundingClientRect();
            });

            page.clipRect = {
                top:    bb.top,
                left:   bb.left,
                width:  1190,
                height: 2036
            }

            page.render('capture.pdf');
            phantom.exit();
        }, 200);
    }
});