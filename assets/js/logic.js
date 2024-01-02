var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var result = document.querySelector("#result");
var count = 0;
var timer = document.querySelector("#time");

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
  createChoices();
});

function createChoices() {
  if (count < 12) {
    question.textContent = `${questionArr[count]}`;
    for (var x = 0; x < 4; x++) {
      var buttons = choices.querySelectorAll("button");
      buttons[x].textContent = `${x + 1}. ${answerArr[count][x]}`;
    }
  } else {
    alert("Quiz FINISHED!!!!!");
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
  }
  setTimeout(() => (result.textContent = ""), 1500);
  count++;
  createChoices();
});

function correct() {
  result.setAttribute("class", "correct");
  result.textContent = "Correct!";
}
function incorrect() {
  result.setAttribute("class", "incorrect");
  result.textContent = "Incorrect!";
}
