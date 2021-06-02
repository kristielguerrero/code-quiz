console.log(questions);

var time = questions.length * 10;
var timer = null;
var currentQuestion;
var qIndex = 0;
var questionEl = document.getElementById("title");
var endGameEl = document.getElementById("end-game");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start-btn");
var timeEL = document.getElementById("time");

//style formatting

//event listeners

function startQuiz() {
  console.log("insideStartQuiz");
  startBtn.style.display = "none";
  timeEL.textContent = time;
  timer = setInterval(function () {
    time--;
    timeEL.textContent = time;
    if (time === 0) {
      endQuiz();
    }
  }, 1000);
  showQuestions();
}

function endQuiz() {
  clearInterval(timer);
}

function endGame() {
  questionEl.style.display = "none";
  endGameEl.style.display = "block";
  choicesEl.style.display = "none";
  clearInterval(timer);
}

function showQuestions() {
  currentQuestion = questions[qIndex];
  console.log(currentQuestion);
  questionEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var newBtn = document.createElement("button");
    console.log(currentQuestion.choices[i]);
    newBtn.textContent = currentQuestion.choices[i];
    choicesEl.appendChild(newBtn);
    newBtn.onclick = choiceClick;
  }
}

function choiceClick(event) {
  console.log(event.target.textContent);
  var choiceClick = event.target.textContent;
  if (choiceClick === currentQuestion.answer) {
    console.log("You got it right!");
  } else {
    console.log("You got it wrong");
    time -= 5;
  }
  //   qIndex++;
  if (qIndex === questions.length - 1) {
    endGame();
  } else {
    qIndex++;
    showQuestions();
  }
}

startBtn.onclick = startQuiz;
