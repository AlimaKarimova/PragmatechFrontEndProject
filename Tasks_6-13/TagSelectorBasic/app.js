const btns = document.querySelectorAll('.btn'),
container = document.querySelector('.buttons-container');

function btnChecked(e) {
    e.target.classList.toggle('checked');
}


for (let btn of btns) {
    btn.addEventListener('click', btnChecked);
}

function addIcon(e) {
    const icon = document.createElement('i');
    icon.className = "fa-regular fa-circle-check";
    if (e.target.childElementCount == 0) {
        e.target.append(icon)

    }else{
        e.target.children[0].remove();
    }
};


container.addEventListener('click', function (e) {
    if (e.target.closest('.btn')) {
        addIcon(e);
    }
});