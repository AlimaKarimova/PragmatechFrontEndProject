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
	// commentin silinmesi ucun eleave olunan funksiya
	commentsCount.innerHTML = `${count} comments`
	commentBox.prepend(comment);
	e.preventDefault()
	const comments = document.querySelectorAll('.comment');
	comments.forEach(comment => {
		comment.addEventListener('dblclick', function (e) {
			e.stopPropagation();
			comment.remove();

		})
	});
});

form.addEventListener('submit', function (e) {
	e.preventDefault();
});


// bu evvelden olan kommentin silinmesi ucundur
const comments = document.querySelectorAll('.comment');
comments.forEach(comment => {
	comment.addEventListener('dblclick', function (e) {
		e.stopPropagation();
		comment.remove();

	})
})