let score = 0;
let currentIndex = 0;

const quizBox = document.getElementById("quiz-box");
const selectedQuestions = shuffle([...questions]).slice(0, 20);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  if (currentIndex >= selectedQuestions.length) {
    quizBox.innerHTML = `
      <h2>✅ Đã hoàn thành!</h2>
      <p>🎯 Điểm của bạn: <strong>${score}/${selectedQuestions.length}</strong></p>`;
    return;
  }

  const q = selectedQuestions[currentIndex];

  const questionHTML = document.createElement("div");
  questionHTML.innerHTML = `
    <h3>Câu ${currentIndex + 1}: ${q.question}</h3>
    <ul>
      ${q.options.map(opt => `<li><button class="option-btn">${opt}</button></li>`).join('')}
    </ul>
  `;

  quizBox.innerHTML = '';
  quizBox.appendChild(questionHTML);

  const buttons = quizBox.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => checkAnswer(btn, q.answer, buttons));
  });
}

function checkAnswer(selectedBtn, correctAnswer, allButtons) {
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else if (btn === selectedBtn) {
      btn.classList.add("wrong");
    }
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 1000);
}

loadQuestion();
