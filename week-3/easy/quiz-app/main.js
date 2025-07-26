const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
var currentQuestion = 0;
var currentQuestionObj = {};
var score = 0;

function quizComponent(obj) {
  var quizMain = document.getElementById("quiz-main");
  var divMain = document.createElement("div");
  divMain.setAttribute("id", "quiz-main");

  var headingDiv = document.createElement("div");
  headingDiv.setAttribute("id", "heading");

  var h2 = document.createElement("h2");
  h2.innerHTML = obj.question;

  headingDiv.append(h2);

  var optionsDiv = document.createElement("div");
  optionsDiv.setAttribute("id", "options");

  var arr = ["a", "b", "c", "d"];
  for (i = 0; i < 4; i++) {
    var option = arr[i];
    var span = document.createElement("span");
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "question");
    input.setAttribute("value", arr[i]);

    span.append(input);

    var label = document.createElement("label");
    label.setAttribute("for", "question");
    label.innerHTML = obj[option];

    span.append(label);
    optionsDiv.append(span);
  }
  var quizFooterDiv = document.createElement("div");
  quizFooterDiv.setAttribute("id", "quiz-footer");

  // var button = document.createElement("button");
  // button.setAttribute("id", "submitB");
  // button.innerHTML = "Submit";
  //
  // quizFooterDiv.append(button);

  quizMain.append(headingDiv);
  quizMain.append(optionsDiv);
  // quizMain.append(quizFooterDiv);
}

function renderResult() {
  var div = document.getElementById("quiz");
  div.innerHTML = "";

  var h1 = document.createElement("h1");
  h1.innerHTML = " Your Score is : " + score + "/" + quizData.length;

  div.append(h1);
}
var iFirst = true;
function handleQuestions() {
  if (iFirst) {
    currentQuestionObj = quizData[0];
    iFirst = false;
  }
  quizComponent(currentQuestionObj);
  console.log(currentQuestionObj);
}
function handleSubmission() {
  console.log("clicked");

  length = quizData.length;
  var answer = document.querySelectorAll("input:checked")[0];

  if (answer) {
    answer = answer.value;
  }
  if (quizData[currentQuestion].correct == answer) {
    score++;
  }
  currentQuestion++;
  console.log(currentQuestion);
  currentQuestionObj = {};

  document.getElementById("quiz-main").innerHTML = "";
  currentQuestionObj = quizData[currentQuestion];

  if (currentQuestion >= length) {
    renderResult();
  }
  handleQuestions();
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  handleQuestions();
  var button = document.querySelector("button");
  button.addEventListener("click", () => {
    handleSubmission();
    console.log("score: ", score);
  });
});
