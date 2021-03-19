"use strict"

// Carousel on Home Page - create an array of images and set image to change every 3 seconds
var i = 0;
var images = [];
var videoPromo = "images/review-video-carousel.jpg";
var listPromo = "images/death-star-promo.jpg";
var socialPromo = "images/bb8-promo.jpg";
var slide = document.getElementById("slide");
images[0] = videoPromo;
images[1] = listPromo;
images[2] = socialPromo;


function changeImg() {
    slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImg, 3000);
}
window.onload = changeImg();