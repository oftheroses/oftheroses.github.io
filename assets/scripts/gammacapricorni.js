const checkpoint = 500;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 0 + currentScroll / checkpoint;
    } else {
        opacity = 1;
    }
    document.querySelector(".fade-bg").style.opacity = opacity;
});

$(document).ready(function () {
    $("#about-button").click(function () {
        if (document.title != "Nashira de la Rosa — About") {
            document.title = "Nashira de la Rosa — About";

            document.getElementById('about-button').className = "desktop-current-link";
            document.getElementById('faq-button').className = "desktop-inactive-link";

            $("#site-container").load("about.html");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#site").offset().top
            }, 10);
        }
    });

    $("#faq-button").click(function () {
        if (document.title != "Nashira de la Rosa — Links") {
            document.title = "Nashira de la Rosa — Links";

            document.getElementById('about-button').className = "desktop-inactive-link";
            document.getElementById('faq-button').className = "desktop-current-link";

            $("#site-container").load("faq.html");
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#site").offset().top
            }, 10);
        }
    });
});