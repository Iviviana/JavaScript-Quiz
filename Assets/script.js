
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
        window.location.reload();
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

    var yourScore=0;


    //Function that will show when the correct answer is clicked and will add points to the score
    function clickedCorrect() {
        $("#correctInput").show();
        $("#wrongInput").hide();
        if (clickedCorrect) {
            yourScore +=10;
        };
    }
    //Function that will show when the wrong answer is clicked and will deduct points from the score
    function clickedWrong() {
        $("#correctInput").hide();
        $("#wrongInput").show();
        if (clickedWrong) {
            yourScore -=5;
        }; if (yourScore < 0) {
            yourScore=0;
        }
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
        document.getElementById("finalScore").innerText=yourScore;
    }

    var initials=[];
    //Saves and displays the initals with the final score
    function addInitials(){
        boxvalue=document.getElementById("initials").value;
        initials.push(boxvalue);
        console.log(initials); 
        document.getElementById("displayInitals").innerText=initials + " " + "-" + " " + yourScore;
        data=JSON.parse(localStorage.getItem("highscores"))
        localStorage.setItem("highscores",JSON.stringify(initials + " " + yourScore))
        
    }
    //Displays the highscore page
    function highScoresPage() {
        $("#finished").hide();
        $("#scores").show();
        $("#correctInput").hide();
        $("#wrongInput").hide();

        
    }

    //reloads to the start
    function goBack() {
        window.location.reload();
    }
    function clearScores() {
        window.localStorage.removeItem("highScores");
    }

    $(".wrongAnswer").click(subtractTimer);
    $(".wrongAnswer").click(clickedWrong);
    $(".correctAnswer").click(addTimer);
    $(".correctAnswer").click(clickedCorrect);
    $("#question1 .answers").click(answerQuestion1);
    $("#question2 .answers").click(answerQuestion2);
    $("#question3 .answers").click(answerQuestion3);
    $("#question4 .answers").click(answerQuestion4);
    $("#submitBtn").click(highScoresPage);
    $("#startButton").click(startQuiz);
    $("#submitBtn").click(addInitials);
    $("#goBack").click(goBack);
    $("clearScoresBtn").click(clearScores)

   
});

