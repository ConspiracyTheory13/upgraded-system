<<<<<<< HEAD
(function() {
    const myQuestions = [{
          question: “Your skin tends to be: ”,
          answers: {
            a: “Oily”,
            b: “Dry”,
            c: “Combination”
          },
          {
            question: “Do you have a skin condition or is your skin sensitive or easily irritated ? ”,
            answers: {
              a: “Yes”,
              b: “No”
            },
            question: " W? "
            a: "?",
            b: "??"
            console.log('myQuestions called')
          ];

          function buildQuiz() {
            const output[];

            myQuestions.forEach((currentQuestion, questionNumber) => {
              const answers = [];
              for (letter in currentQuestion.answers) {
                answers.push(
                  `<label>
=======
 // (function () {
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
   }, {
     question: 'Do you have a skin condition or is your skin sensitive or easily irritated ? ',
     answers: {
       a: 'Yes I have a skin condition or allergy',
       b: 'Yes my skin is sensitive',
       c: 'No'
     },
     aAnswer: 'a',
     bAnswer: 'b',
     cAnswer: 'c'
   }, {
     question: 'What type of climate is your skin typically exposed to?',
     answers: {
       a: 'Dry',
       b: 'Humid',
       c: 'Neither'
     },
     aAnswer: 'a',
     bAnswer: 'b',
     cAnswer: 'c'
   }, {
     question: 'Your skin tends to be: ',
     answers: {
       a: 'Oily',
       b: 'Dry',
       c: 'Combination'
     },
     aAnswer: 'a',
     bAnswer: 'b',
     cAnswer: 'c'
   }, {
     question: 'Your skin tends to be: ',
     answers: {
       a: 'Oily',
       b: 'Dry',
       c: 'Combination'
     },
     aAnswer: 'a',
     bAnswer: 'b',
     cAnswer: 'c'
   }

 ];

 function buildQuiz() {
   const output = []

   myQuestions.forEach((currentQuestion, questionNumber) => {

     const answers = [];
     for (letter in currentQuestion.answers) {
       answers.push(
         `<label>
>>>>>>> c4807911c88519dcc07013818a406a53e4d4f907
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
<<<<<<< HEAD
                );
              }

              output.push(
                `<div class="slide">
    <div class="question"> ${currentQuestion.question}
    <div class="answers"> ${answers.join("")} </div>
      </div>`
              );
            });

            quizContainer.innerHTML = output.join("");
          }

          function showResults() {};
          const answerContainer = quizContainer.querySelectorAll(".answers");
          let numCorrect = 0;
          // num correct is just a way of tracking which zone level product

          myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {})
              .value;
          })

          if (userAnswer === currentQuestion.possibleAnswer) {
            numCorrect++;

          }
          //when user selects answer point total is added to running score
          function showSlide(n) {
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide = n;

            if (currentSlide === 0) {
              Rerun
              previousButton.style.display = "none";
            } else {
              previousButton.style.display = "inline-block";
            }

            if (currentSlide === slides.length - 1) {
              nextButton.style.display = "none";
              submitButton.style.display = "inline-block";
            } else {
              nextButton.style.display = "inline-block";
              submitButton.style.display = "none";
            }
          }

          function showNextSlide() {
            showSlide(currentSlide + 1);

            function showPreviousSlide() {
              showSlide(currentSlide - 1);
            }
            const quizContainer = document.getElementById('quiz');
            const resultsContainer = document.getElementById('results');
            const submitButton = document.getElementById('submit');

            buildQuiz();
            const previousButton = document.getElementById("previous");
            const nextButton = document.getElementById("next");
            const slides = document.querySelectorAll(".slide");
            let currentSlide = 0;

            showSlide(0);

            submitButton.addEventListener("click", showResults);
            previousButton.addEventListener("click", showPreviousSlide);
            nextButton.addEventListener("click", showNextSlide);
          })();
=======
       );
     }
     output.push(
       `<div class="slide">
    <div class="question"> ${currentQuestion.question}
    <div class="answers"> ${answers.join("")} </div>
      </div>`
     );
   });

   quizContainer.innerHTML = output.join("");
 }

 function showResults() {};
 const answerContainer = quizContainer.querySelectorAll(".answers");
 let numCorrect = 0;
 // num correct is just a way of tracking which zone level product

 myQuestions.forEach((currentQuestion, questionNumber) => {
     const answerContainer = answerContainers[questionNumber];
     const selector = `input[name=question${questionNumber}]:checked`;
     const userAnswer = (answerContainer.querySelector(selector) || {})
       .value;

     if (userAnswer === currentQuestion.correctAnswer) {
       numCorrect++;

     }); resultsContainer.innerHTML =
   `${numCorrect} out of ${myQuestions.length}`;
 }

 // function showSlide(n) {
 //   slides[currentSlide].classList.remove("active-slide");
 //   slides[n].classList.add("active-slide");
 //   currentSlide = n;
 //
 //   if (currentSlide === 0) {
 //     Rerun
 //     previousButton.style.display = "none";
 //   } else {
 //     previousButton.style.display = "inline-block";
 //   }
 //
 //   if (currentSlide === slides.length - 1) {
 //     nextButton.style.display = "none";
 //     submitButton.style.display = "inline-block";
 //   } else {
 //     nextButton.style.display = "inline-block";
 //     submitButton.style.display = "none";
 //   }
 // }
 //
 // function showNextSlide() {
 //   console.log("Your mom");
 //   showSlide(currentSlide + 1);
 //
 //   function showPreviousSlide() {
 //     showSlide(currentSlide - 1);
 //   }
 // //when user selects answer point total is added to running score

 const quizContainer = document.getElementById('quiz');
 const resultsContainer = document.getElementById('results');
 const submitButton = document.getElementById('submit');

 buildQuiz();
 const previousButton = document.getElementById("previous");
 const nextButton = document.getElementById("next");
 const slides = document.querySelectorAll(".slide");
 let currentSlide = 0;

 showSlide(0);

 submitButton.addEventListener('click', showResults);
 previousButton.addEventListener(
   'click', showPreviousSlide);
 nextButton.addEventListener('click',
   showNextSlide);


 // }
>>>>>>> c4807911c88519dcc07013818a406a53e4d4f907
