
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));


let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestions = [];

let questions =[
  {
    question: 'Have I thought about all the what ifs?',
    choice1: 'No',
    choice2: 'Yes',
    answer: 2,
  },
  {
    question: 'Am I safely positioned and not in the line of fire?',
    choice1: 'No',
    choice2: 'Yes',
    answer: 2,
  },
  {
    question: 'Do I have a plan if things go wrong?',
    choice1: 'No',
    choice2: 'Yes',
    answer: 2,
  },
  {
    question: 'I confirm that I am not rushing, frustrated, fatigued or complacent.',
    choice1: 'No',
    choice2: 'Yes',
    answer: 2,
  },
  {
    question: 'I have identified, isolated, locked out and proven isolation of plant and energy sources (where necessary).',
    choice1: 'No',
    choice2: 'Yes',
    answer: 2,
  },
  {
    question: 'I have told others that may be affected by my work.',
    choice1: 'No',
    choice2: 'Yes',
    answer: 2,
  },  
];

const SCORE_POINTS = 10;

function startQuiz() {
    score = 0
    availableQuestions = [...questions] 
    getNewQuestion()
}


  
  function getNewQuestion() {
    if(availableQuestions.length === 0 & score === 60) {
      sessionStorage.setItem('mostRecentScore', score)
        // TODO correct link
      return window.location.assign('./weatherTitle.html')
    } 
    if(availableQuestions.length === 0 & score < 60){
      return window.location.assign('./contactSuper.html')      
    }
   
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
  
    choices.forEach(function(choice) {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
  })
  
    availableQuestions.splice(questionsIndex, 1)
  
    acceptingAnswers = true
  }
  

    choices.forEach(function(choice) {
      choice.addEventListener('click', function(e) {
        if(!acceptingAnswers) return
        acceptingAnswers = false
        
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'
     
        if(classToApply === 'correct'){
          score = score + 10;
          console.log(score)
        }

        selectedChoice.parentElement.classList.add(classToApply)
  
        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply)
          getNewQuestion()
          }, 500)
      })
        })
  
  startQuiz()
  
