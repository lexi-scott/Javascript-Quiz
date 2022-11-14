var titleDiv = document.getElementById("title");
var alts = document.querySelectorAll(".alternative");
// var btn = document.querySelectorAll("button");
var resultDiv = document.querySelector(".result");
var timeEl = document.querySelector(".time")
var quizEl = document.querySelector(".quiz");
var score = 0;
var secondsLeft = 120;

//time counter function
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // if timer is to zero, need to show "Game Over"
      }
  
    }, 1000);
  }
setTime();

//define the object for the questions
var questions = [
  {
    title: "Which is not a JavaScript data type?",
    alternatives: ["number", "string", "boolean", "for loop"],
    correctAnswer: 3
  }, 
  {
    title: "How do you continuously add 1 to a variable?",
    alternatives: ["++", "--", "add one please", "plus one"],
    correctAnswer: 0
  },
  {
    title: "What is this operator ===?",
    alternatives: ["railroad ties", "highway lane", "strict equality", "boolean"],
    correctAnswer: 2
  },
  {
    title: "What is not a looping structure?",
    alternatives: ["for", "while", "do-while", "if"],
    correctAnswer: 3
  },
  {
    title: "What would be the result of 3+2+'7'",
    alternatives: ["9", "327", "57", "NaN"],
   correctAnswer: 2
  } 
];

var currentQuestion = 0;  // we initalize a value for our ITERATOR

//function for showing the question
function showQuestion() {
    //code
   titleDiv.textContent = questions[currentQuestion].title; 
   console.log(alts);

   alts.forEach(function(element, index){
    console.log(element, index)
    element.textContent = questions[currentQuestion].alternatives[index];

   element.addEventListener('click', function(event) {
    if (questions[currentQuestion].correctAnswer == index) {
        resultDiv.textContent = 'Correct Answer';
        //keeps score
        score++
        console.log(score);
        //add next question button
        var nextButton = document.createElement("BUTTON");
        var text = document.createTextNode("Next Question");
        nextButton.appendChild(text);
        resultDiv.appendChild(nextButton);

        element.addEventListener('click', function(event){
          console.log("does this work??")
        }
        );
        
    }
    else {
        resultDiv.textContent = 'Wrong Answer';
        secondsLeft--;
   }});
 });
} 

// function nextQuestion() {
//   console.log("In nextQuestion Function");
//   // we need to update or clear the previous question

//   // we want to show the next question --> showQuestion();

//   // increment our index / current question / ITERATOR
//   currentQuestion++;
//   console.log(currentQuestion);
//   showQuestion();
// }

// function moreQuestions() {
//   if(currentQuestion > questions.length) {
//     gameOver();
//   }
// }

//calls the function
showQuestion();

// potential function to have the if loops to check answer...not necessray 
// function checkAnswer(answer) {
  // var userSelect = event.target.value;
  //   checkAnswer(userSelect);
//   // nextQuestion();
// }



// gameOver() 
// We show the user their ending score and inital input form
