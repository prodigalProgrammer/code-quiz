var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var result = document.querySelector("#result");
var count = 0;
var timer = document.querySelector("#time");
var time = 75;
var endScreen = document.querySelector("#end-screen");
var score = document.querySelector("#final-score");
var bonus = 0;
var hiScoreButton = document.querySelector("#submit");
var initials = document.querySelector("#initials");

start.addEventListener("click", function (event) {
  event.preventDefault();
  startScreen.setAttribute("class", "hide");
  questionScreen.removeAttribute("class", "hide");
  for (var i = 0; i < 4; ++i) {
    var choice = document.createElement("button");
    choices.appendChild(choice);
    choice.setAttribute("data-index", i + 1);
  }
  timer.textContent = "75";
  startCountdown();
  createChoices();
});

function startCountdown() {
  countdown = setInterval(function () {
    time--;
    timer.textContent = time;
    if (result.textContent === "Incorrect!") {
      time -= 10;
    }
    if (time > 0 && count === 12) {
      clearInterval(countdown);
      gameWon();
    }
    if (time <= 0) {
      clearInterval(countdown);
      gameLost();
    }
  }, 1000);
}

function createChoices() {
  if (count < 12) {
    question.textContent = `Q${count + 1}. ${questionArr[count]}`;
    for (var x = 0; x < 4; x++) {
      var buttons = choices.querySelectorAll("button");
      buttons[x].textContent = `${x + 1}. ${answerArr[count][x]}`;
    }
  }
}

choices.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button")) {
    if (count === 0 && element.dataset.index === "3") {
      correct();
    } else if (count === 1 && element.dataset.index === "4") {
      correct();
    } else if (count === 2 && element.dataset.index === "2") {
      correct();
    } else if (count === 3 && element.dataset.index === "4") {
      correct();
    } else if (count === 4 && element.dataset.index === "4") {
      correct();
    } else if (count === 5 && element.dataset.index === "4") {
      correct();
    } else if (count === 6 && element.dataset.index === "1") {
      correct();
    } else if (count === 7 && element.dataset.index === "4") {
      correct();
    } else if (count === 8 && element.dataset.index === "1") {
      correct();
    } else if (count === 9 && element.dataset.index === "2") {
      correct();
    } else if (count === 10 && element.dataset.index === "3") {
      correct();
    } else if (count === 11 && element.dataset.index === "4") {
      correct();
    } else {
      incorrect();
    }
    setTimeout(() => (result.textContent = ""), 1000);
    count++;
    createChoices();
  }
});

function correct() {
  result.setAttribute("class", "correct");
  result.textContent = "Correct!";
  bonus += 5;
}
function incorrect() {
  result.setAttribute("class", "incorrect");
  result.textContent = "Incorrect!";
}

function gameWon() {
  questionScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  score.textContent = time + bonus;
}
function gameLost() {
  questionScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  score.textContent = time + bonus;
}

hiScoreButton.addEventListener("click", function (event) {});
