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
      question: "1.	If spring index=2.5, what can be concluded about stresses in the wire?",  ///// Write the question inside double quotes
      answers: {
        a: "They are high",                  ///// Write the option 1 inside double quotes
        b: "They are negligible",                  ///// Write the option 2 inside double quotes
        c: "They are moderate",                  ///// Write the option 3 inside double quotes
        d: "Cannot be determined"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "2.	Find the shear stress in the spring wire used to design a helical compression spring if a load of 1200N is applied on the spring. Spring index is 6, and wire diameter 7mm.",  ///// Write the question inside double quotes
      answers: {
        a: "452.2N/mm²",                  ///// Write the option 1 inside double quotes
        b: "468.6N/mm²",                  ///// Write the option 2 inside double quotes
        c: "512.2N/mm²",                  ///// Write the option 3 inside double quotes
        d: "None of the listed"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		 {
      question: "3.	Find the mean coil diameter of a helical compression spring if a load of 1200N is applied on the spring. Spring index is 6, and wire diameter 7mm.",
      answers: {
        a: "7/6mm",
        b: "42mm",
        c: "1200×6/7 mm",
        d: "None of the listed"
      },
      correctAnswer: "b"
    }, {
      question: "4.	Find the extension produced by a helical spring of spring constant 30N/m, when a mass of 500g is attached to its end?",
      answers: {
        a: "0.016 m",
        b: "1.6 m",
        c: "0.16 m",
        d: "None of these"
      },
      correctAnswer: "c"
    },		 {
      question: "5.	Determine number of coils in a helical compression spring, if modulus of rigidity is 80 Gpa and spring stiffness is 50 N/ mm. Assume wire diameter and spring index as 8 mm and 5 respectively",
      answers: {
        a: "11.8 turns",
        b: "12.8 turns",
        c: "13.3 turns",
        d: "None of the above"
      },
      correctAnswer: "c"
    },					                  ///// this line


   
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
