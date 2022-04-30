let btns = document.querySelectorAll('.btn');
let icon = document.createElement('i');
icon.className = "fa-regular fa-circle-check";



for (let btn of btns) {
    btn.addEventListener('click', (e) => {
        btn.classList.add('checked')

    })
}
for (let btn of btns) {
    btn.addEventListener('click', (e) => {
        btn.append(icon)
    })
}


let newBtn = document.createElement('div');
let input = document.querySelector('input');
let box = document.querySelector('.buttons-container');
newBtn.className = 'btn';


input.addEventListener('change', () => {
    let inputText = input.value;
    newBtn.innerHTML = inputText;
    box.append(newBtn);

})




// yalniz bir defe elave olunur ve funksionalligi yoxdur