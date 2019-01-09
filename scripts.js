var images = document.getElementsByClassName('image');

var lightboxes = document.getElementsByClassName('lightbox');

var ebay_lightbox = document.getElementById('ebay-lightbox');

var ebay_image = document.getElementById('ebay-image');

var ebay_previous = document.getElementById('ebay-previous');
var ebay_next = document.getElementById('ebay-next');

var ebay_lightbox_images = ebay_lightbox.getElementsByClassName("lightbox-image");

const show_image = (images, prev, next) => index => {
    for(var x = 0; x < images.length; x++) {
        if (x === index % images.length) {
            images[x].style.display = 'block';
        } else {
            images[x].style.display = 'none';
        }
        prev.onclick = () => ebay_carousel(index - 1);
        next.onclick = () => ebay_carousel(index + 1);
    }
}

const ebay_carousel = show_image(ebay_lightbox_images, ebay_previous, ebay_next);

ebay_image.onclick = () => {
    ebay_lightbox.style.display = 'block';
    ebay_carousel(0);
    // ebay_next.onclick = () => {
    //     ebay_carousel(1);
    // }
    // ebay_carousel(1).style.display = 'block';
    // ebay_lightbox_images[0].style.display = "block";
}


window.onclick = function(event) {

    if (event.target.getAttribute("class") === 'lightbox') {
        for(var x = 0; x < lightboxes.length; x++) {
            lightboxes[x].style.display = "none";
        }
        // lightbox.style.display = "none";
    }
} 