const input = document.querySelector('.input'),
    image = document.querySelector('.new-comment .img'),
    commentBox = document.querySelector('.comments-list'),
    form = document.querySelector('form'),
    comment = document.createElement("div"),
    commentText = input.value;





input.addEventListener('change', function (e) {
    comment.innerHTML = `${commentText}`;
    commentBox.insertAdjacentHTML("afterbegin", comment)
    e.preventDefault();

});

form.addEventListener('submit', function (e) {
    e.preventDefault();
});