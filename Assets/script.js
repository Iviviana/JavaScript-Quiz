
$(document).ready(function() {
    // all custom jQuery will go here

    //function for the timer
    var timer;
    var timeLeft=0;
    function startTimer() {
        timeLeft=60;
        timer=setInterval(function(){
            timeLeft--;
            if(timeLeft===0) {
                finish();
            }
            document.getElementById("timer").innerText="Time:" + " " + timeLeft;
        },1000)
    }
    //function to call when the timer is finished
    function finish() {
        clearInterval(timer);
        alert("Out of Time!");
    }
    //function that subtracts time from the timer
    function subtractTimer(){
        timeLeft-=5;
        if(timeLeft===0) {
            finish();
        }
    }

    //Function that adds time to the timer
    function addTimer() {
        timeLeft+=5;
        if(timeLeft===0) {
            finish();
        }
    }
    function clickedCorrect() {
        $("#correctInput").show();
        $("#wrongInput").hide();
    }

    function clickedWrong() {
        $("#correctInput").hide();
        $("#wrongInput").show();
    }
    
    //Function that will commence the quiz, start the timmer, hide the start quiz, and display the first question
    function startQuiz() {
        $("#start").hide();
        $("#question1").show();
        startTimer();
    }
    //Functions for hiding the previous question when answered and displaying the proceeding question
    function answerQuestion1() {
        $("#question1").hide();
        $("#question2").show();
    }
    function answerQuestion2() {
        $("#question2").hide();
        $("#question3").show();
    }
    function answerQuestion3() {
        $("#question3").hide();
        $("#question4").show();
    }
    function answerQuestion4() {
        $("#question4").hide();
        $("#finished").show();
        clearInterval(timer);
    }
    $(".wrongAnswer").click(subtractTimer);
    $(".wrongAnswer").click(clickedWrong);
    $(".correctAnswer").click(addTimer);
    $(".correctAnswer").click(clickedCorrect);
    $("#question1 .answers").click(answerQuestion1);
    $("#question2 .answers").click(answerQuestion2);
    $("#question3 .answers").click(answerQuestion3);
    $("#question4 .answers").click(answerQuestion4);
    $("#start").click(startQuiz);
    
});

