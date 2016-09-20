$(document).ready(function() {
    var clickedon;
    $('.click-me').click(function(e) {
        if (clickedon === true) {
            $('h1').removeClass('pulse');
            $("span", this).text("Ba dum ba dum");
            clickedon = false;
        } else {
            e.preventDefault();
            $('h1').addClass('pulse');
            $("span", this).text("stoppp");
            clickedon = true;
        }
    });
});
