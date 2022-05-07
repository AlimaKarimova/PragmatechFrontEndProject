let lists = document.querySelectorAll('.price-list-item');
let buttons = document.querySelectorAll('.price-list-item button');
let commonList = document.querySelector('.price-list');


function colorChange(e) {
    for (let i of buttons) {
        if (e) {
            e.target.classList.add('btn-checked')
        }else{
            e.target.classList.remove('btn-checked')

        }

    }
}




// commonList.addEventListener("click", zoom);
commonList.addEventListener("click", colorChange);


























// let selected = null;

// commonList.addEventListener("click", event => {

//     if (event.target.closest("button")) {
//         if (selected) {
//             selected.classList.remove("btn-checked");
//         }
//         selected = event.target;
//         selected.classList.add("btn-checked");
//     }

// }, false);



// commonList.addEventListener('click', e => {

//     if (e.target.closest("price-list-item")) {
//         if (selected) {
//             selected.classList.remove("zoom");
//         }
//         selected = e.target;
//         selected.classList.add("zoom");


//     }

// },false);