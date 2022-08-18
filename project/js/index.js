const menuBtn = document.getElementById("menuBtn")
const sideNav = document.getElementById("sideNav")
const menu = document.getElementById("menu")
sideNav.style.right == "-250px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "./photos/icons8-menu-64.png";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "./photos/icons8-menu-64.png";
    }
}

$(document).ready(function() {

    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});