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
            }
          ];


          function buildQuiz() {
            const output[];

            myQuestions.forEach((currentQuestion, questionNumber) => {
              const answers = [];
              for (letter in currentQuestion.answers) {
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
          var myResults = [{
                ProductType: 'Hydrating',
                productLink: < a href = "#"
                class = "next" > Begin & raquo; < /a> </h
                2 >
                //
              },
              skinType: 'Sensitive'
            ] < div class = "quizContainer" >
            (function() {};
              const quizContainer = document.getElementById('quiz');
              const resultsContainer = document.getElementById('results');
              const submitButton = document.getElementById('submit');
              const slides = document.querySelectorAll(".slide");
              let currentSlide = 0;

              showSlide(0);

              function buildQuiz() {
                const output[];
                output.push(
                  `<div class="slide">
                           <div class="question"> ${currentQuestion.question} </div>
                           <div class="answers"> ${answers.join("")} </div>
                         </div>`
                  quizContainer.innerHTML = output.join("");
                }

              )
            };


          buildQuiz();

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
          }

          function showPreviousSlide() {
            showSlide(currentSlide - 1);

          }
          previousButton.addEventListener("click", showPreviousSlide);nextButton
          .addEventListener("click", showNextSlide);$('submitButton').on(
            'click', () => {
              $('myQuestions.length').hide();

              submitButton.addEventListener('click', showResults);

            }; < /div> < /script >
          }
