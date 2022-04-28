let btns = document.querySelectorAll('.btn');
let icons = document.querySelectorAll('.btn i');
// let box=document.querySelector('.buttons-box');



function btnChecked() {
    for (let btn of btns) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('checked');
            for (let icon of icons) {
                if (icon.parentNode == btn) {
                    icon.classList.toggle('inline')
                }
            }
        })
    }

}

btnChecked()

let newBtn = document.createElement('div');
let input = document.querySelector('input');
let box = document.querySelector('.buttons-box');
newBtn.className = 'yeni';
for(let btn of btns){
    newBtn
}

function addMovie() {
    input.addEventListener('change', () => {
        let inputText = input.value;
        newBtn.innerHTML = inputText;
        box.append(newBtn);

    })
}
addMovie()


// yalniz bir defe elave olunur ve funksionalligi yoxdur