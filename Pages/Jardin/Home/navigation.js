var aboutButton = document.getElementsByClassName("link-one");
var faqButton = document.getElementsByClassName("link-two");
var galleryButton = document.getElementsByClassName("link-three");

function aboutPage() {
    if (document.title != 'nashira de la rosa — about') {
        //alert("1");
        document.title = 'nashira de la rosa — about';

        // find id active-link
        aboutButton.id = 'current-link';
        faqButton.id = 'inactive-link';
        galleryButton.id = 'inactive-link';
    
        // change content
    }
}

function faqPage() {
    if (document.title != 'nashira de la rosa — links') {
        //alert("2");
        document.title = 'nashira de la rosa — links';

        // find id active-link
        aboutButton.id = 'inactive-link';
        faqButton.id = 'current-link';
        galleryButton.id = 'inactive-link';
    
        // change content
    }
}

function galleryPage() {
    if (document.title != 'nashira de la rosa — gallery') {
        //alert("3");
        document.title = 'nashira de la rosa — gallery';

        // find id active-link
        aboutButton.id = 'inactive-link';
        faqButton.id = 'inactive-link';
        galleryButton.id = 'current-link';
    
        // change content
    }
}