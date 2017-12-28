(function(){

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

  function buildQuiz(){
    const output[];
    myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
)
for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
  };

  function showResults(){};

  const myQuestions = [
  {
  	question: “Your skin tends to be:”,
  	answers: {
  		a: “Oily”,
  		b: “Dry”,
  		c: “Combination”
  },
  {
  	question: “Do you have a skin condition or is your skin sensitive or easily irritated?”,
  	answers: {
  		a: “Yes”,
  		b: “No”
  }
  ];

  buildQuiz();

//                $('.hide-button').on('click', () => {
//                $('.first-image').hide();

submitButton.addEventListener('click', showResults);
};
