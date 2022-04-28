let btns = document.querySelectorAll('.btn');
let icon = document.createElement('i');
icon.className = 'fa-regular fa-circle-check';


function btnChecked() {
    for (let btn of btns) {
        btn.addEventListener('click', () => {
            if (btn.children.length == 0) {
                btn.appendChild(icon)
            } else {
                btn.removeChild(icon)
            }
        });

    }

}

btnChecked()