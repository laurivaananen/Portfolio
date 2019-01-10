var images = document.getElementsByClassName('image');

var lightboxes = document.getElementsByClassName('lightbox');

var ebay_lightbox = document.getElementById('ebay-lightbox');
var ebay_image = document.getElementById('ebay-image');
var ebay_previous = document.getElementById('ebay-previous');
var ebay_next = document.getElementById('ebay-next');
var ebay_lightbox_images = ebay_lightbox.getElementsByClassName("lightbox-image");

var recipe_lightbox = document.getElementById('recipe-lightbox');
var recipe_image = document.getElementById('recipe-image');
var recipe_previous = document.getElementById('recipe-previous');
var recipe_next = document.getElementById('recipe-next');
var recipe_lightbox_images = recipe_lightbox.getElementsByClassName("lightbox-image");

var exit_buttons = document.getElementsByClassName('exit');

const show_image = (images, prev, next) => index => {
    for(var x = 0; x < images.length; x++) {
        if (x === Math.abs(index % images.length)) {
            images[x].style.display = 'block';
        } else {
            images[x].style.display = 'none';
        }
        prev.onclick = () => ebay_carousel(index - 1);
        next.onclick = () => ebay_carousel(index + 1);
    }
}

const show_image_2 = (images, prev, next) => index => {
    for(var x = 0; x < images.length; x++) {
        if (x === Math.abs(index % images.length)) {
            images[x].style.display = 'block';
        } else {
            images[x].style.display = 'none';
        }
        prev.onclick = () => recipe_carousel(index - 1);
        next.onclick = () => recipe_carousel(index + 1);
    }
}

const ebay_carousel = show_image(ebay_lightbox_images, ebay_previous, ebay_next);

ebay_image.onclick = () => {
    ebay_lightbox.style.display = 'block';
    ebay_carousel(0);
}

const recipe_carousel = show_image_2(recipe_lightbox_images, recipe_previous, recipe_next);

recipe_image.onclick = () => {
    recipe_lightbox.style.display = 'block';
    recipe_carousel(0);
}

for (var x = 0; x < exit_buttons.length; x++) {
    exit_buttons[x].onclick = () => closeLightboxes();
}

const closeLightboxes = () => {
    for(var x = 0; x < lightboxes.length; x++) {
        lightboxes[x].style.display = "none";
    }
}