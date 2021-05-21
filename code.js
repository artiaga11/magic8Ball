const answerOptions = [
  "Yes, but do it drunk",
  "My sources say no, but they also said Hilary would win",
  "Do what Jesus would do",
  "You wish",
  "Leave me alone",
  "GO AWAY!",
  "Not looking good for you",
  "LMAO",
  "In your dreams",
  "WWJD?",
  "No, no cake for you",
  "Ask the Ouija Board",
  "Ask Missi",
  "Ask God",
  "Yes, you deserve cake",
  "Stop shaking me",
  "HA HA HA HAHAHAHA",
  "I told you so",
  "Ask Randy",
  "No, I don't know why your code doesn't work",
  "No, I don't know why your code works",
];

let button = document.getElementById("button");
let input = document.getElementById("input");
let answer = document.getElementById("answer");

button.addEventListener("click", function () {
  if (input.value.length < 1) {
    alert("Enter a question!");
  } else {
    let num = answerOptions[Math.floor(Math.random() * answerOptions.length)];
    answer.innerText = num;
  }
});
