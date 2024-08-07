// Questions and Answers
const myQuestions = [
    {
        question: "What is the highest-grossing movie of all time?",
        answers: [
            { text: "Avengers: Endgame", correct: false},
            { text: "Avatar", correct: true},
            { text: "Titanic", correct: false},
            { text: "Star Wars: The Force Awakens", correct: false}
        ]
    },
    {
        question: "In what movie does Leonardo DiCaprio say the line, \"I'm the king of the world!\"?",
        answers: [
            { text: "The Wolf of Wall Street", correct: false},
            { text: "Inception", correct: false},
            { text: "Titanic", correct: true},
            { text: "The Great Gatsby", correct: false}
        ]
    },
    {
        question: "Who played the character of Harry Potter in the movie series?",
        answers: [
            { text: "Daniel Radcliffe", correct: false},
            { text: "Rupert Grint", correct: false},
            { text: "Emma Watson", correct: false},
            { text: "All of the above Answer", correct: true}
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        answers: [
            { text: "1917", correct: false},
            { text: "Parasite", correct: true},
            { text: "Jojo Rabbit", correct: false},
            { text: "Joker", correct: false}
        ]
    },
    {
        question: "In the movie \"The Matrix\", what is the main character's name?",
        answers: [
            { text: "Neo", correct: true},
            { text: "Trinity", correct: false},
            { text: "Morpheus", correct: false},
            { text: "Agent Smith", correct: false}
        ]
    },
    {
        question: "Who played the character of Batman in the 1989 film directed by Tim Burton?",
        answers: [
            { text: "Michael Keaton", correct: true},
            { text: "Christian Bale", correct: false},
            { text: "George Clooney", correct: false},
            { text: "Ben Affleck", correct: false}
        ]
    },
    {
        question: "What is the name of the spaceship in the movie \"Alien\"?",
        answers: [
            { text: "Nostromo", correct: true},
            { text: "Millennium Falcon", correct: false},
            { text: "USS Enterprise", correct: false},
            { text: "Serenity", correct: false}
        ]
    },
    {
        question: "In what year was the first \"Star Wars\" movie released?",
        answers: [
            { text: "1977", correct: true},
            { text: "1980", correct: false},
            { text: "1983", correct: false},
            { text: "1999", correct: false}
        ]
    },
    {
        question: "What is the name of the character played by Anthony Hopkins in \"The Silence of the Lambs\"?",
        answers: [
            { text: "Hannibal Lecter", correct: true},
            { text: "Clarice Starling", correct: false},
            { text: "Jack Crawford", correct: false},
            { text: "Buffalo Bill", correct: false}
        ]
    },
    {
        question: "What is the name of the fictional city where \"The Dark Knight\" takes place?",
        answers: [
            { text: "Gotham City", correct: true},
            { text: "Metropolis", correct: false},
            { text: "Central City", correct: false},
            { text: "Star City", correct: false}
        ]
    }
];

// Declaration of variables
const displayTimer = document.getElementById("display-timer");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

var interval;

//Declaring the startTimer function, which is used to keep the quiz within 1 min of time.
function startTimer(){
    var timeLimit = 60;
    interval = setInterval(function(){
            var minutes = Math.floor(timeLimit/60);
            var seconds = timeLimit % 60;
            var min = (minutes < 10 ? "0" : "") + minutes;
            var sec = (seconds < 10 ? "0" : "") + seconds;
            displayTimer.innerHTML = min+":"+sec;
            timeLimit--;
            
            if(timeLimit < 10){
                displayTimer.style.color = "red";
            }else{
                displayTimer.style.color = "#000";
            }
            if (timeLimit < 0) {
                showScore();
                displayTimer.style.color = "#000";
            }   
    },1000);
}

let currentQuestionIndex = 0;
let score = 0;

// Declaring the startQuiz function, which is used to start the quiz.
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); // Calling the function
    startTimer(); // Calling the function 
}

// Declaring the showQuestion function, which is used to show the Question.
function showQuestion() {
    resetState(); // Calling the function
    let currentQuestion = myQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Declaring the resetState function, which is used to reset the nextButton display style.
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

// Declaring the selectAnswer function, which is used to show the correct and incorrect answer.
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Declaring the showScore function, which is used to show the quiz score.
function showScore() {
    resetState(); // Calling the function
    clearInterval(interval); // Calling the function
    questionElement.innerHTML = `You scored ${score} out of ${myQuestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Declaring the handleNextButton function, which is used to show the nextButton value.
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < myQuestions.length) {
        showQuestion(); // Calling the function
    } else {
        showScore(); // Calling the function
    }
};

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < myQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz(); // Calling the function
