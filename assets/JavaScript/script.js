const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)

function startGame() {
  console.log('Game Started')
  startButton.classList.add('hide')

  setNextQuestion()
}

function setNextQuestion() {
 showQuestion(shuffledQuestions[currentQuestionIndex])
 
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    }
]