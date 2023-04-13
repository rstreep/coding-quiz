
// variables for different parts of the quiz
var start = document.querySelector('#start');
var quiz = document.querySelector('#quiz');
// var question = document.querySelector('#question');
var question = document.getElementById("question");
var optionA = document.querySelector('#optionA');
var optionB = document.querySelector('#optionB');
var optionC = document.querySelector('#optionC');
var optionD = document.querySelector('#optionD');
var username = "";
var score = 0;
var time = 99;
var currentQuestionIndex = 0;

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

// start quiz 

start.onclick = function() {
    startQuiz();
};
// hides start button and displays questions card
function startQuiz(){
    start.style.display = "none";
    quiz.style.display = "flex";

    renderQuestion(currentQuestionIndex);
}
// displays question properties based on array and checks user answer
function renderQuestion(currentQuestion) {
    var q = questions[currentQuestion];
    question.innerText = q.question;

    optionA.innerText = q.choiceA;
    optionB.innerText = q.choiceB;
    optionC.innerText = q.choiceC;
    optionD.innerText = q.choiceD;

    optionA.onclick = function() {
        checkAnswer("A", currentQuestionIndex);
        currentQuestionIndex+=1;
       
        if (currentQuestionIndex <= questions.length-1) {
            renderQuestion(currentQuestionIndex);
        } else{
            endResult();
        }
    };
    optionB.onclick = function() {
        checkAnswer("B", currentQuestionIndex);
        currentQuestionIndex+=1;
       
        if (currentQuestionIndex <= questions.length-1) {
            renderQuestion(currentQuestionIndex);
        } else{
            endResult();
        }
    };
    optionC.onclick = function() {
        checkAnswer("C", currentQuestionIndex);
        currentQuestionIndex+=1;
       
        if (currentQuestionIndex <= questions.length-1) {
            renderQuestion(currentQuestionIndex);
        } else{
            endResult();
        }
    };
    optionD.onclick = function() {
        checkAnswer("D", currentQuestionIndex);
        currentQuestionIndex+=1;
       
        if (currentQuestionIndex <= questions.length-1) {
            renderQuestion(currentQuestionIndex);
        } else{
            endResult();
        }
    };
}
// incomplete: adds user score and decreases time based on correct/incorrect inputs
function checkAnswer(userAnswer, questionNumber){
    if(questions[questionNumber].correct == userAnswer){
        console.log('is correct');
        score + 20;
    } else {
        console.log('is wrong');
        time - 10;
    }
}
// incomplete: hides questions card and displays end result screen with score and username prompt to save score to local storage
function endResult() {
    console.log("end");
    quiz.style.display = "none";
}