var titleDiv = document.getElementById("title");
var alts = document.querySelectorAll(".alternative");
var resultDiv = document.querySelector(".result");
var timeEl = document.querySelector(".time")
var quizEl = document.querySelector(".quiz");
var startEl = document.querySelector(".start");
var beginEl = document.querySelector(".beginBtn")

var score = 0;
var secondsLeft = 2;

function startGame() {
  var startTitle = document.createElement("h1");
  startEl.appendChild(startTitle);
  startTitle.textContent= "Are you ready to test you knowledge on JavaScript?";
  var startButton = document.createElement("BUTTON");
  var startBText = document.createTextNode("Begin Quiz!");
  startEl.style.setProperty("color", "purple");
  startButton.appendChild(startBText);
  startEl.appendChild(startButton);
  startButton.addEventListener("click", function(event){
    setTime();
    showQuestion();
    quizEl.classList.remove("hidden");
  startEl.style.display = "none";
  beginEl.style.display = "none";
  });
  };


//time counter function
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // if timer is to zero, need to show "Game Over" call gameOver function
        gameOver();
      }
  
    }, 1000);
  }

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

var currentQuestion = 0;  

//function for showing the question
function showQuestion() {
    //code
   titleDiv.textContent = questions[currentQuestion].title; 
   console.log(alts);

   alts.forEach(function(element, index){
    console.log(element, index)
    element.textContent = questions[currentQuestion].alternatives[index];

   element.addEventListener('click', function(event) {
    if (questions[currentQuestion].correctAnswer === index) {
        resultDiv.textContent = 'Correct Answer';
        //add next question button
        var nextButton = document.createElement("BUTTON");
        var text = document.createTextNode("Next Question");
        nextButton.appendChild(text);
        resultDiv.appendChild(nextButton);
      //click event to call next question function
        nextButton.addEventListener('click', function(event){
          resultDiv.textContent = " ";
          if(currentQuestion <= questions.length ){
            nextQuestion();
          }
        }
        );  
    }
    //wrong answer will appear if wrong answer is chosen 
    else {
        resultDiv.textContent = 'Wrong Answer';
        secondsLeft--;
   }});
 });
} 

function nextQuestion() {
  // increment our index / current question / ITERATOR
  score++;
  console.log(score);
  currentQuestion++;
  if (currentQuestion <= questions.length) {
    showQuestion();
  }
}

function gameOver() {
  beginEl.style.display = "none";
  quizEl.style.display = "none";
  var overTitle = document.createElement("h1");
  startEl.appendChild(overTitle);
  overTitle.textContent = "Game Over"
  console.log("game over")
}

// gameOver();

//calls the function
startGame();
