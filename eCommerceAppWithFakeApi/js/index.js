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

// ACCORDEON CODES

const title = document.getElementsByClassName("accordion-title");
let i;

for (i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function () {  
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// RANGE SLIDER
let slider = document.getElementById("myRange");
let output = document.getElementById("range-value");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = `$ ${this.value}`;
}

// function hideAllParagraphs() {
//   for (let item of allItems) {
//       // p.style.display = "none"
//       item.querySelector("p").style.display = "none"
//   }
// }

// function Accordion() {

//   hideAllParagraphs()
//   accordionData.forEach(function(element, index) {

//       accContainer.innerHTML += GenerateItemUI(element.acc_title, element.acc_body)
//   })
// }


// function AccFunc(e) {
//   hideAllParagraphs()
//   if (acar) {
//       e.nextElementSibling.style.display = "none"
//       e.querySelector('i').className = "fa-solid fa-chevron-up"
//           // e.querySelector('i').style.transform = "rotate(-180deg)"

//       acar = false
//   } else {
//       e.nextElementSibling.style.display = "block"
//       e.querySelector('i').className = "fa-solid fa-chevron-down"
//           // e.querySelector('i').style.transform = "rotate(0deg)"
//       acar = true
//   }
// }

// Accordion()