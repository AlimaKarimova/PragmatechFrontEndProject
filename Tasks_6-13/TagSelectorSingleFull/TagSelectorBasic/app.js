const movieNames = ['avengers', 'shutter island', 'kong:skull island', 'grand budapest hotel', 'inception',
    'the shawshank redemption', 'se7en', 'the dark knight', 'goodfellas', 'the matrix'
];

const moviesList = document.querySelector('.movies-list'),
    form = document.querySelector('form'),
    input = document.querySelector('.input');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newMovie = input.value;
    movieNames.push(newMovie);
    createMovieList(movieNames, moviesList)
    event.target.reset();
});

function createMovieList(items, parent) {
    parent.innerHTML = '';
    items.forEach((item) => {
        parent.innerHTML += `<div class="movie">${item}</div>`
    });

}
createMovieList(movieNames, moviesList);

function btnChecked(e) {
    e.target.classList.toggle('checked');
}

moviesList.addEventListener('click', function (e) {
    if (e.target.closest('.movie')){
        btnChecked(e);
    }
})




function addIcon(e) {
    const icon = document.createElement('i');
    icon.className = "fa-regular fa-circle-check";
    if (e.target.childElementCount == 0) {
        e.target.append(icon)

    } else {
        e.target.children[0].remove();
    }
};


moviesList.addEventListener('click', function (e) {
    if (e.target.closest('.movie')) {
        addIcon(e);
    }
});