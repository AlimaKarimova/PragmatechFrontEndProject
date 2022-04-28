let btns = document.querySelectorAll('.btn');
let icon = document.createElement('i');
icon.classList.add("fa-regular fa-circle-check");


function btnChecked() {
    for (let btn of btns) {
        btn.classList.toggle('checked');
        btn.appendChild(icon)
    }
}

for (let btn of btns) {
    btn.addEventListener('click',btnChecked);
}
