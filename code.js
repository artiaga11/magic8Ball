const answerOptions = [
  "Yes, but do it drunk.",
  "My sources say no, but they also said Hilary would win.",
  "Beach, Please!",
  "You wish!",
  "Leave me alone!",
  "GO AWAY!",
  "Not looking good for you.",
  "LMAO!",
  "In your dreams.",
  "WWJD?",
  "Geez, ask your Mom!",
  "Ask the Ouija Board.",
  "BUGGER OFF!",
  '"Bye Felicia!"',
  "No, ya daft cow!",
  "Stop shaking me. I'm hungover!",
  "BWAHAHAHA",
  "I told you so.",
  "I don't know and I don't care.",
  "Idk, I'll ask your Mom tonight.",
  "Figure it out yourself, ya wanker!",
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

document.addEventListener("keydown", function (evt) {
  switch (evt.key) {
    case "Enter":
      if (input.value.length > 0) {
        let num =
          answerOptions[Math.floor(Math.random() * answerOptions.length)];
        answer.innerText = num;
      }
  }
});
