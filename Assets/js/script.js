var titleDiv = document.getElementById("title");
var alts = document.querySelectorAll(".alternative");
var btn = document.getElementById("btn");
var resultDiv = document.querySelector(".result");
var timeEl = document.querySelector(".time")

var secondsLeft = 20;

//time counter function
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }



//define the object for the questions
var question1 = {
    title: "What is the 17th letter of the alphabet?",
    alternatives: ["N", "R", "Q", "L"],
    correctAnswer: 2
};

var question2 = {
    title: "How many moons does Saturn have?",
    alternatives: ["8", "83", "3", "0"],
    correctAnswer: 1
};

var question3 = {
    title: "What is the average height of a California redwood tree?",
    alternatives: ['240 feet', '150 feet', '500 feet', '400 feet'],
    correctAnswer: 0
};

//function for showing the question
function showQuestion(q) {
    setTime();
    //code
   titleDiv.textContent =q.title; 
   console.log(alts);

   alts.forEach(function(element, index){
    element.textContent = q.alternatives[index];

   element.addEventListener('click', function() {
    if (q.correctAnswer == index) {
        resultDiv.textContent = 'Correct Answer';
    }
    else {
        resultDiv.textContent = 'Wrong Answer';
    }
   });
 });
} 

//call the function
// showQuestion(question1);

// showQuestion(question2);

showQuestion(question3);
