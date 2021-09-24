

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

function findResults() {
    const answersQ1 = document.querySelectorAll('input[name="q1"]');
    let q1val;
    for (const rb of answersQ1) {
        if (rb.checked) {
            q1val = rb.value;
            break;
        }
    }

    const answersQ2 = document.querySelectorAll('input[name="q2"]');
    let q2val;
    for (const rb of answersQ2) {
        if (rb.checked) {
            q2val = rb.value;
            break;
        }
    }

    const answersQ3 = document.querySelectorAll('input[name="q3"]');
    let q3val;
    for (const rb of answersQ3) {
        if (rb.checked) {
            q3val = rb.value;
            break;
        }
    }

    const answersQ4 = document.querySelectorAll('input[name="q4"]');
    let q4val;
    for (const rb of answersQ4) {
        if (rb.checked) {
            q4val = rb.value;
            break;
        }
    }

    const answersQ5 = document.querySelectorAll('input[name="q5"]');
    let q5val;
    for (const rb of answersQ5) {
        if (rb.checked) {
            q5val = rb.value;
            break;
        }
    }

    return [q1val, q2val, q3val, q4val, q5val];
}