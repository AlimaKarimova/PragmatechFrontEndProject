const input = document.querySelector('.input'),
    commentBox = document.querySelector('.comments-list'),
    form = document.querySelector('form'),
    commentsCount = document.querySelector('.comments-count span');
let count = 1;



input.addEventListener('change', function (e) {
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
    count++;
    commentsCount.innerHTML = `${count} comments`
    commentBox.prepend(comment);
    e.preventDefault()
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

const commet = document.querySelector('.commet');
commet.addEventListener('click', function (e) {
    e.currentTarget.remove();
    count--;
    commentsCount.innerHTML = `${count} comments`;


});
// if (e.target.className == 'all-comments-content-item') {
//     e.target.remove();