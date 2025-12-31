// 1. The questions
const questions = [
  "Have You Read The Quran Translated In Urdu?",
  "Are you interested in doing so?",
  "Where are you located? Provide your full address",
  "What is your full name?"
];

// 2. To store answers
const answers = [];

// 3. Keep track of which question we're on
let currentQuestion = 0;

// 4. Get elements
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");

// 5. Show first question
questionEl.textContent = questions[currentQuestion];

// 6. Button click logic
nextBtn.addEventListener("click", function () {
  // Store the answer
  answers.push(answerEl.value);

  // Clear input
  answerEl.value = "";

  // Move to next question
  currentQuestion++;

  // Check if there are more questions
  if (currentQuestion < questions.length) {
    questionEl.textContent = questions[currentQuestion];
  } else {
    // Finished all questions
    questionEl.textContent = "Saving answers...";
    nextBtn.style.display = "none";
    answerEl.style.display = "none";

    fetch("https://script.google.com/macros/s/AKfycbyiax-d6sN8E-yx2h43SLiFuD6pVrxBIXU7BuzmC05fRNGzKvIEdcPDs5PekruF8Bry/exec", {
  method: "POST",
  body: new URLSearchParams({
    answer1: answers[0],
    answer2: answers[1],
    answer3: answers[2],
    answer4: answers[3]
  })
})
.then(() => {
  window.location.href = "page2.html";
})
.catch(() => {
  questionEl.textContent = "An error occurred.";
});

  }
});
