/**
 * Created by ding on 15-3-19.
 */
var percent = document.body.offsetWidth / document.body.offsetHeight;
$(window).resize(function() {
    if (document.body.offsetWidth / document.body.offsetHeight > percent) {
        var size = 0.3 / (document.body.offsetWidth / document.body.offsetHeight / percent);
        $("#circle")[0].style.paddingBottom = (size.toFixed(2) * 100) + "%";
        $("#circle")[0].style.width = (size.toFixed(2) * 100) + "%";
        document.getElementById( "time").style.fontSize = "4vh";
        document.getElementById( "start").style.fontSize = "7vh";
    }
    else {
        $("#circle")[0].style.paddingBottom = "30%";
        $("#circle")[0].style.width = "30%";
        document.getElementById( "time").style.fontSize = "4vw";
        document.getElementById( "start").style.fontSize = "7vw";
    }
});