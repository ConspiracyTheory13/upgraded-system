/* jslint browser:true */

window.onload = function () {

  'use strict';
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const previousButton = document.getElementById('previous');
  const nextButton = document.getElementById('next');

  let currentSlide = 0;

    const myQuestions = [{
    question: 'Your skin tends to be:',
    answers: {
      a: 'Oily',
      b: 'Dry',
      c: 'Combination'
    },
    aAnswer: 'a',
    bAnswer: 'b',
    cAnswer: 'c'
  },
  {
    question: 'Does your skin tend to be sensitive or irritated?',
    answers: {
      a: 'Yes, I have a skin condition',
      b: 'Yes, my skin tends to be sensitive',
      c: 'No, my skin isn\'t sensitive'
    },
    aAnswer: 'a',
    bAnswer: 'b',
    cAnswer: 'c'
  },
  {
    question: 'What type of climate is your skin commonly exposed too?',
    answers: {
      a: 'Dry and hot',
      b: 'Humid',
      c: 'Neither'
    },
    aAnswer: 'a',
    bAnswer: 'b',
    cAnswer: 'c'
  },
  {
    question: 'What skin tone do you have?',
    answers: {
      a: 'Light skinned',
      b: 'Medium skinned',
      c: 'Dark skinned'
    },
    aAnswer: 'a',
    bAnswer: 'b',
    cAnswer: 'c'
  },
  {
    question: 'Does your skin show signs of ageing?',
    answers: {
      a: 'No',
      b: 'Some fine lines around eyes and mouth',
      c: 'Mostly sagging and drooping'
    },
    aAnswer: 'a',
    bAnswer: 'b',
    cAnswer: 'c'
  }
  ]

var resultA = 'lalala';
var resultB = 'gggggg';
var resultC = 'fdffddfd';
var userAnswer = {};
var currentQuestion = {};
var skinScore = 0;

  function showSlide (n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.visibility = 'hidden';
    }
    else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide () {
    showSlide(currentSlide + 1)
  }

  function showPreviousSlide () {
    showSlide(currentSlide - 1)
  }

  function buildQuiz () {
    const output = [];
    // ${currentQuestion.answers[letter]}

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for (var letter in currentQuestion.answers) {
          answers.push(
                   `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}" checked>
                       ${letter} :
                    </label>`
                 );
               }

               output.push(
               // add this question and its answers to the output
                 `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                  </div>`
               );
             });

    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    console.log("Running?")
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let skinScore = 0;
      if (userAnswer === currentQuestion.aAnswer) {
        skinScore++;

      } else if (userAnswer === currentQuestion.bAnswer) {
        skinScore+2;
      } else {
  skinScore+3;

    }
    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question' + questionNumber + ']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    });

    }

  buildQuiz();

  const slides = document.querySelectorAll('.slide');

  showSlide(0);

  submitButton.addEventListener('click', showResults);
  nextButton.addEventListener('click', showNextSlide);
  previousButton.addEventListener('click', showPreviousSlide);

  const resultOptions = [

  {	title: 'resultA',
  	desc: 'You got' + resultA
  },

  {	title: 'resultB',
  	desc: 'You got' + resultB
  },

  {	title: 'resultC',
  	desc: 'You got' + resultC
  }
  ];

  if (userAnswer === currentQuestion.aAnswer) {
     skinScore++;

   } else if (userAnswer === currentQuestion.bAnswer) {
     skinScore+2;
   } else {
     skinScore+3;
  }

  if (5 <= skinScore && skinScore <= 10) {
        resultOptions[0].desc;
      } else if (11 <= skinScore && skinScore <= 16) {
        resultOptions[1].desc;
      } else {
        resultOptions[2].desc;
      }
};
