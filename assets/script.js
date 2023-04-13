var start = document.querySelector('#start');
var quiz = document.querySelector('#quiz');
var question = document.querySelector('#question');
var optionA = document.querySelector('#optionA');
var optionB = document.querySelector('#optionB');
var optionC = document.querySelector('#optionC');
var optionD = document.querySelector('#optionD');
var username = "";
var score = 0;
var timerEl;

var questions = [
    { question: "Question 1 goes here?",
      choiceA: "Choice A goes here! 1",
      choiceB: "Choice B goes here! 1",
      choiceC: "Choice C goes here! 1",
      choiceD: "Choice D goes here! 1",
      correct: "A"},
      { question: "Question 2 goes here?",
      choiceA: "Choice A goes here! 2",
      choiceB: "Choice B goes here! 2",
      choiceC: "Choice C goes here! 2",
      choiceD: "Choice D goes here! 2",
      correct: "C"},
      { question: "Question 3 goes here?",
      choiceA: "Choice A goes here! 3",
      choiceB: "Choice B goes here! 3",
      choiceC: "Choice C goes here! 3",
      choiceD: "Choice D goes here! 3",
      correct: "D"},
      { question: "Question 4 goes here?",
      choiceA: "Choice A goes here! 4",
      choiceB: "Choice B goes here! 4",
      choiceC: "Choice C goes here! 4",
      choiceD: "Choice D goes here! 4",
      correct: "C"},
      { question: "Question 5 goes here?",
      choiceA: "Choice A goes here! 5",
      choiceB: "Choice B goes here! 5",
      choiceC: "Choice C goes here! 5",
      choiceD: "Choice D goes here! 5",
      correct: "B"},
]
var lastQuestion = questions.length -1;
var currentQuestion = 0;

function renderQuestion() {
    var q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

currentQuestion = 0;
renderQuestion()

currentQuestion++;
renderQuestion()



start.addEventListener('click', startQuiz);

function startQuiz(){
    start.style.display = "none";
    timerEl = 99;
    timerEl = setInterval()
    quiz.style.display = "block";
    console.log('hello');
}



function checkAnswer(A){
    if(questions[currentQuestion].correct == answer){
        score + 20;
    } else {
        time - 10;
    }
}