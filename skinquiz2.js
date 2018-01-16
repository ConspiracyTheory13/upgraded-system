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
    correctAnswer: 'c'
  },
  {
    question: 'Does your skin tend to be sensitive or irritated?',
    answers: {
      a: 'Yes, I have a skin condition',
      b: 'Yes, my skin tends to be sensitive',
      c: 'No, my skin isn\'t sensitive'
    },
    correctAnswer: 'c'
  },
  {
    question: 'What type of climate is your skin commonly exposed too?',
    answers: {
      a: 'Dry and hot',
      b: 'Humid',
      c: 'Neither'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Where is Waldo really?',
    answers: {
      a: 'A',
      b: 'B',
      c: 'c'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Where is Waldo really?',
    answers: {
      a: 'A',
      b: 'B',
      c: 'c'
    },
    correctAnswer: 'c'
  }
  ]

  function showSlide (n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = 'none';
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

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for (var letter in currentQuestion.answers) {

          answers.push(
            `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
          );
        }

        output.push(
          `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
        );
      }
    );
    return quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    console.log('in showResults');
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question' + questionNumber + ']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }

  buildQuiz();

  const slides = document.querySelectorAll('.slide');

  showSlide(0);

  submitButton.addEventListener('onclick', showResults);
  var x = document.getElementById("myNxt");
  nextButton.addEventListener('onclick', showNextSlide);
  x.getElementById("myNxt").addEventListener("click", showNextSlide);
  //$(nextButton).on('click', function () {'onclick', showNextSlide});
  //previousButton.addEventListener('onclick', showPreviousSlide);

  };
