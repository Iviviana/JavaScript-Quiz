
$(document).ready(function() {
    // all custom jQuery will go here
    var timer;
    var timeLeft=0;
    function startTimer() {
        timeLeft=100;
        timer=setInterval(function(){
            timeLeft--;
            if(timeLeft===0) {
                finish();
            }
            document.getElementById("timer").innerText=timeLeft;
        },1000)
    }

    function finish() {
        clearInterval(timer);
        alert("Game Over!");
    }

    function subtractTimer(){
        timeLeft-=5;
        if(timeLeft===0) {
            finish();
        }
    }
    document.getElementById("wrongAnswer").addEventListener("click",subtractTimer);
    startTimer();
    




    
});

