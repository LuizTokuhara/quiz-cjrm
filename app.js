const form = document.querySelector(".quiz-form");
const correctAnswers = ["B", "A", "A", "B", "A"];

const modal = document.querySelector(".modal-bg");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-button");
const modalWrapper = document.querySelector(".modal-bg");

let score = 0;
let correct = 0;
let totalScore = 0;

/******************
 * Form
 ******************/
const formResult = (event) => {
  event.preventDefault();

  const userAnswers = [
    form.question1.value,
    form.question2.value,
    form.question3.value,
    form.question4.value,
    form.question5.value,
  ];

  correctAnswers.forEach((answer, index) => {
    if (answer === userAnswers[index]) {
      score += 20;
      correct++;
    }
  });

  openModal();
};

form.addEventListener("submit", formResult);

/*******************
 * Modal
 *******************/
const openModal = () => {
  modalPoints();
};

const modalPoints = () => {
  modal.style.display = "block";

  const timer = setInterval(() => {
    modalContent.innerHTML = `
    <h5>Minha pontuação</h5>
    <h1>${totalScore}%</h1>
    <p>Você acertou ${correct} de ${correctAnswers.length} perguntas</p>
  `;

    if (totalScore === score) {
      clearInterval(timer);
    }

    totalScore++;
  }, 10);
};

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modalWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
  const clickedClassElement = event.target.classList[0];

  if (clickedClassElement === "modal-bg") {
    modal.style.display = "none";
  }
});
