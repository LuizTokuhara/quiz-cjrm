const form = document.querySelector(".quiz-form");
const correctAnswers = ["B", "A", "A", "B", "A"];

const modal = document.querySelector(".modal-bg");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-button");
const modalWrapper = document.querySelector(".modal-bg");

/******************
 * Form
 ******************/
const formResult = (event) => {
  event.preventDefault();

  let score = 0;
  let correct = 0;

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

  openModal(score, correct);
};

form.addEventListener("submit", formResult);

/*******************
 * Modal
 *******************/
const openModal = (score, correct) => {
  modalContent.innerHTML = `
    <h5>Minha pontuação</h5>
    <h1>${score}</h1>
    <p>Você acertou ${correct} de ${correctAnswers.length} perguntas</p>
  `;
  modal.style.display = "block";
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
