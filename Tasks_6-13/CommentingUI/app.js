const input = document.querySelector('input'),
    image = document.querySelector('.new-comment .img'),
    commentBox = document.querySelector('.comments-list');
const comment = document.createElement('div');




input.addEventListener('change', function (e) {
    input.value = "";
    comment.innerHTML = `<p> ${input.value} </p>`;
    commentBox.insertAdjacentHTML("afterbegin", comment);
    e.preventDefault();

});