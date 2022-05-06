let btns = document.querySelectorAll('.btn');
let icon = document.createElement('i');
icon.classList = "fa-regular fa-circle-check";
commonList = document.querySelector('.buttons-container');


function btnChecked(e) {
    for (let btn of btns) {
        e.target.appendChild(icon);

    }
};

function changeColor(e) {
    for (let btn of btns) {
        if (commonList.closest('checked')) {
            btn.classList.remove('checked')
        } else {
            e.target.classList.add('checked')
        }
    }
};

for (let btn of btns) {
    btn.addEventListener('click', btnChecked);
    btn.addEventListener('click', changeColor);
}