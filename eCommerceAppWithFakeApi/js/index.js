'use strict';
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// };

// let images = [
//   ["../images/chair-1-1.jpg", "../images/chair-2-1.jpg", "../images/chair-3-1.jpg", "../images/chair-4-1.jpg"]
//   ["../images/chair-5-1.jpg", "../images/chair-6-1.jpg", "../images/chair-7-1.jpg", "../images/chair-8-1.jpg"]
// ]

// let container = document.querySelector('.carousel-container');

// for (let img in images) {
//   let slide = `
// <div class="carousel-slider">
//   <div class="product-box">
//     <div class="product-image">
//       <img src="${img[0][0]}" alt="">
//     </div>
//   </div>
//   <div class="product-box">
//     <div class="product-image">
//       <img src="${img[0][1]}" alt="">
//     </div>
//   </div>
//   <div class="product-box">
//     <div class="product-image">
//       <img src="${img[0][2]}" alt="">
//     </div>
//   </div>
//   <div class="product-box">
//     <div class="product-image">
//       <img src="${img[0][3]}" alt="">
//     </div>
//   </div>
// </div>

//   `
//   container.innerHTML += slide;
// }

