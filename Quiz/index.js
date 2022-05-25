const quizData = [{
        question: "What does HTML stand for?",
        a: "Helicopters Terminal Motorboats Lamborginis",
        b: "Hypertext Markup Laguage",
        c: "Hyperloop Machine Language",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cars SUVs Sailboats",
        c: "Central Style Sheets",
        correct: "a",
    },
    {
        question: "What year did JavaScript appear?",
        a: "1899",
        b: "2005",
        c: "1995",
        correct: "c",
    },
    {
        question: "Who is the author of the JavaScript language?",
        a: "Bill Gates",
        b: "Brendan Eich",
        c: "Steve Jobs",
        correct: "b",
    },
    {
        question: "What language is this project written in?",
        a: "JavaScript",
        b: "Ruby",
        c: "C++",
        correct: "a",
    },
];
const quizBox = document.querySelector('.quiz-box');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const startBox = document.querySelector('.start-box');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');

let currentQuiz = 0;
let score = 0;

function firstQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerElements.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

startBtn.addEventListener('click', () => {
    startBox.classList.add('hide');
});

startBtn.addEventListener('click', () => {
    firstQuiz();
});
startBtn.addEventListener('click', () => {
    quizBox.classList.remove('hide');
})


function nextQuestion() {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            firstQuiz();
        } else {
            quizBox.innerHTML = `<h4>You answered correctly at ${score}/${quizData.length} questions</h4>
        <div class="btn-container"><button class="btn">Reload</button></div>`;
        }
    }
}




































// const QuestionDB = JSON.parse(localStorage.getItem('DataBase'));
// const QuestionDB = [{
//         text: "What does HTML stand for?",
//         options: ['Helicopters Terminal Motorboats Lamborginis', 'Hypertext Markup Laguage', 'Hyperloop Machine Language'],
//         correctAnswer: 'Hypertext Markup Laguage'
//     },
//     {
//         text: "What does CSS stand for?",
//         options: ['Cascading Style Sheets', 'Cars SUVs Sailboats', 'Central Style Sheets'],
//         correctAnswer: 'Cascading Style Sheets',
//     },
//     {
//         text: "What year did JavaScript appear?",
//         options: ['1899', '2005', '1995'],
//         correctAnswer: "1995"
//     },
//     {
//         text: "Who is the author of the JavaScript language?",
//         options: ["Bill Gates", "Brendan Eich", "Steve Jobs"],
//         correctAnswer: "Brendan Eich"
//     },
//     {
//         text: "What language is this project written in?",
//         options: ["JavaScript", "Ruby", "C++"],
//         correctAnswer: "JavaScript"
//     }
// ];
// const startBox = document.querySelector('.start-box');
// const mainBox = document.querySelector('.main-box');

// function addQuestion() {
//     for (let i in QuestionDB) {
//         const quizBox = document.createElement('div');
//         quizBox.classList.add('quiz-box', 'container')
//         quizBox.innerHTML = "";
//         quizBox.innerHTML += ` 
//         <h4>${QuestionDB[i].text}</h4>
//         <ul>
//         <li>${QuestionDB[i].options[0]}</li>
//         <li>${QuestionDB[i].options[1]}</li>
//         <li>${QuestionDB[i].options[2]}</li>
//         </ul>
//         <button id="nextBtn"> Next </button>`
//         mainBox.append(quizBox);
//         quizBox.classList.add('hide');
//     };
//     const quizBoxs = document.querySelectorAll('.quiz-box');
//     let question = 0;
//     const startBtn = document.getElementById('startBtn');
//     const nextBtn = document.getElementById('nextBtn');

//     startBtn.addEventListener('click', () => {
//         startBox.classList.add('hide');

//     });
//     startBtn.addEventListener('click', () => {
//         quizBoxs[question].style.display = 'block';
//     })
//     nextBtn.addEventListener('click', () => {
//         quizBoxs[question].classList.remove('hide');
//         question++;

//     })




// };
// addQuestion();