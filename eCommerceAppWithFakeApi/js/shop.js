// // ACCORDEON CODES

// const title = document.getElementsByClassName("accordion-title");
// let i;

// for (i = 0; i < title.length; i++) {
//   title[i].addEventListener("click", function () {  
//     this.classList.toggle("active");
//     const panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// // RANGE SLIDER
// let slider = document.getElementById("myRange");
// let output = document.getElementById("range-value");
// output.innerHTML = slider.value;
// slider.oninput = function () {
//   output.innerHTML = `$ ${this.value}`;
// }

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

