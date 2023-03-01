import "./styles.css";

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const questionBtn = document.getElementById("questionBtn");
const answerBtn = document.getElementById("answerBtn");

questionBtn.addEventListener("click", function () {
  fetch(
    "https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0].question);

      const questionData = data.results[0].question;
      question.innerText = questionData;

      answerBtn.addEventListener("click", function () {
        const correctAnswer = data.results[0].correct_answer;
        answer.innerText = correctAnswer;
      });
    });
});
