

// a function that makes start button show question one when clicked //  

function startQs() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("q1").style.display = "inline-block";
}

// function to unhide question and reveal next question when button is clicked  // 

function nextQuestion(thisQuestion, nextQuestion) {
    document.getElementById(thisQuestion).style.display = "none";
    document.getElementById(nextQuestion).style.display = "inline-block";

}


// function to calculate results???
// function findResults() {

// document.querySelectorAll('input[type="radio"]:checked')

// }
// value?? 


