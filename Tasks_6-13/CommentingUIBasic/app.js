const input = document.querySelector('.input'),
    commentBox = document.querySelector('.comments-list'),
    form = document.querySelector('form');





input.addEventListener('change', function () {
    const comment = document.createElement("div");
    comment.className = 'comment';
    const commentText = input.value;
    input.value = ' ';
    comment.innerHTML = `<div class="comment-image">
    <img src="./user1.png" alt=""></div>
    <div class="comment-info">
        <span class="name">Kenzo Nakamura</span>
        <span class="date">18days ago</span>
        <p class="serial-number">0x2a0d29...269BBb6</p>
        <p>${commentText}</p>
    </div>`;
    commentBox.prepend(comment);
    e.preventDefault();
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
});