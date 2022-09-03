function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

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
            document.getElementById('gallery-button').className = "desktop-inactive-link";

            $("#site-container").load("about.html");
            /*$([document.documentElement, document.body]).animate({
                scrollTop: $("#site").offset().top
            }, 10);*/
        }
    });

    $("#faq-button").click(function () {
        if (document.title != "Nashira de la Rosa — Links") {
            document.title = "Nashira de la Rosa — Links";

            document.getElementById('about-button').className = "desktop-inactive-link";
            document.getElementById('faq-button').className = "desktop-current-link";
            document.getElementById('gallery-button').className = "desktop-inactive-link";

            $("#site-container").load("faq.html");
            /*$([document.documentElement, document.body]).animate({
                scrollTop: $("#site").offset().top
            }, 10);*/
        }
    });
});