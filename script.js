console.log(questions);

var time = questions.length * 10;
var timer = null;

var qIndex = 0;

var startBtn = document.getElementById("start-btn");
var timeEL = document.getElementById("time");
//event listeners

function startQuiz() {
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

function showQuestions() {
  var currentQuestion = questions[qIndex];
  console.log(currentQuestion);
  questionEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var newBtn = document.createElement("button");
    newBtn.textContent = choices;
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
  qIndex++;
  showQuestions();
}

startBtn.onclick = startQuiz;
