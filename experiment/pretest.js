/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "1.	Which type of springs have only active coils?",  ///// Write the question inside double quotes
      answers: {
        a: "Helical compression springs",                  ///// Write the option 1 inside double quotes
        b: "Helical tension springs",                  ///// Write the option 2 inside double quotes
        c: "Both a. and b.",                  ///// Write the option 3 inside double quotes
        d: "None of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "2.	Solid length for helical compression springs having square and ground ends is given as _________.",  ///// Write the question inside double quotes
      answers: {
        a: "(n + 2)d",                  ///// Write the option 1 inside double quotes
        b: "(n + 3)d",                  ///// Write the option 2 inside double quotes
        c: "(n + 4)d",                  ///// Write the option 3 inside double quotes
        d: "None of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


      {
      question: "3.	Which law is used in the movement of a helical spring?",
      answers: {
        a: "Gravitational Law",
        b: "Pascal’s Law",
        c: "Newton’s Law",
        d: "Hooke’s Law"
      },
      correctAnswer: "d"
    },
    {
      question: "4.	Which of the following is an application of helical springs",
      answers: {
        a: "Automatic door closers",
        b: "Mattress springs",
        c: "Car suspension",
        d: "All of the above"
      },
      correctAnswer: "d"
    }, 
    {
      question: "5.	Give the condition at which a spring obeys Hooke’s law.",
      answers: {
        a: "The extension of the spring should equal to the elastic limit",
        b: "The extension of the spring should be within the elastic limit",
        c: "The extension of the spring should be greater than the elastic limit",
        d: "The extension of the spring should be less than the elastic limit"
      },
      correctAnswer: "b"
    },



  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
