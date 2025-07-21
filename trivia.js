// trivia.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("trivia-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "b") score++;
    if (q2 && q2.value === "a") score++;
    if (q3 && q3.value === "c") score++;

    result.textContent = `Your score: ${score}/3`;
  });
});
