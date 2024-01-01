var start = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var count = 0;

function choiceButtons() {
  for (var i = 0; i < 4; ++i) {
    var choice = document.createElement("button");
    choice.textContent = `${i + 1}. ${answerArr[count][i]}`;
    choices.appendChild(choice);
  }
}
start.addEventListener("click", function (event) {
  event.preventDefault();
  startScreen.setAttribute("class", "hide");
  questionScreen.removeAttribute("class", "hide");
  question.textContent = `${questionArr[count]}`;
  choiceButtons();
});
