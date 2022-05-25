const DB = JSON.parse(localStorage.getItem('DataBase'));
const startBox=document.querySelector('.start-box');
const mainBox =document.querySelector('.main-box');

function addQuestion() {
    for (let i in DB) {
        const quizBox = document.createElement('div');
        quizBox.classList.add('quiz-box', 'container')
        quizBox.innerHTML = "";
        quizBox.innerHTML += ` 
        <h4>${DB[i].text}</h4>
        <ul>
        <li>${DB[i].options[0]}</li>
        <li>${DB[i].options[1]}</li>
        <li>${DB[i].options[2]}</li>
        <li>${DB[i].options[3]}</li>
       
    </ul>`

       mainBox.append(quizBox);
       
    };
};
addQuestion();

// function startQuiz(){
//     startBox.classList.add('hide');
//     mainBox.classList.remove('hide');
// }
