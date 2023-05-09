
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
// const finalScore = Array.from(document.querySelectorAll('#finalScore'));
// const mostRecentScore = Array.from(document.querySelectorAll('#mostRecentScore'));

// finalScore.innerText = mostRecentScore

// const score = {
//   score:mostRecentScore
// }

let currentQuestion = {};
let acceptingAnswers = true;
let availableQuestions = [];

let questions =[
  {
    question: 'Can I complete the task without risk of injury to myself and others?',
    choice1: 'No',
    choice2: 'Yes',
    answer: 2,
  },
  {
    question: 'Have all of the identified hazards been removed and/or controlled?',
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
    if(availableQuestions.length === 0 & score === 20) {
      sessionStorage.setItem('mostRecentScore', score)
        // TODO correct link
      return window.location.assign('./submit.html')
    } 
    if(availableQuestions.length === 0 & score < 20){
      return window.location.assign('./contactSuper.html')      
    }

    // if(choices === false){
    //     return window.location.assign('./contactSuper.html')        
    // }
   
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
  
