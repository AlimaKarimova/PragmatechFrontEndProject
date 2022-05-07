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
createMovieList(movieNames, moviesList)

function changeStyle(item) {
    item.classList.toggle('checked');
}

movieNames.forEach(item => {
    item.addEventListener('click', changeStyle(e.target))
});



// let icon = document.createElement('i');
// icon.classList = "fa-regular fa-circle-check";



// function btnChecked(e) {
//     for (let movieName of movieNames) {
//         e.target.appendChild(icon);

//     }
// };

// function changeColor(e) {
//     for (let movieName of movieNames) {
//         if (e.target) {
//             e.target.classList.add('checked');
//         }

//     }
// };

// for (let movieName of movieNames) {
//     movieName.addEventListener('click', btnChecked);
//     movieName.addEventListener('click', changeColor);
// }