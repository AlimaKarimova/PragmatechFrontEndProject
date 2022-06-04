const allItems=document.querySelectorAll(".panel");
let acar = false;

function hideAllParagraphs() {
  for (let item of allItems) {
    item.style.display = "none"
  }
}
hideAllParagraphs()



function AccFunc(e) {
  hideAllParagraphs()
  if (acar) {
    e.nextElementSibling.style.display = "none"
    e.querySelector('i').className = "fa-solid fa-plus"

    acar = false
  } else {
    e.nextElementSibling.style.display = "block"
    e.querySelector('i').className = "fa-solid fa-minus"
    acar = true
  }
}
