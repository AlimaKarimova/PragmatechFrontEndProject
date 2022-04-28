let btns = document.querySelectorAll('.btn');
let icon = document.createElement('i');
icon.classList = "fa-regular fa-circle-check";



function btnChecked(e) {
    for (let btn of btns) {
        e.target.appendChild(icon);
    }
};

function changeColor(e) {
    for (let btn of btns) {
        e.target.classList.add('checked');
        btn.classList.remove('checked')
        // axrincida sehv var

    }
};

for (let btn of btns) {
    btn.addEventListener('click', btnChecked);
    btn.addEventListener('click', changeColor);
}