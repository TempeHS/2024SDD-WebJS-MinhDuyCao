var randomNumber = 0;
var playerGuess = 0;
var computerScore = 0;
var playerScore = 0;
var playerTip = 0;
var countDownFrom = 10;
var currentSecond = 11;
var timerId = 0;

function gameLoop() {
    generateRandomNumber();
    equalityCheck();
    updateHtmlContent();
    //secondCountDown ();
}


function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
}


function updateHtmlContent() {
    document.getElementById("playerScoreContent").innerHTML = playerScore;
    document.getElementById("computerScoreContent").innerHTML = computerScore;
    document.getElementById("tipContent").innerHTML = playerTip;
}


function equalityCheck() {
    playerGuess = document.getElementById("playerGuessInput").value;
    playerGuess = Number(playerGuess);
    if (playerGuess === randomNumber) {
        currentSecond = 11;
        playerScore = playerScore + 1;
        playerTip = "correct, click to play again";
        document.getElementById("playButton").value = "play now";
    } else {
        document.getElementById("playButton").value = "guess again";
        if (playerGuess < randomNumber) {
            playerTip = "it's higher than" + playerGuess;
        }
        if (playerGuess > randomNumber) {
            playerTip = "it's lower than " + playerGuess;
        }
        if (isNaN(playerGuess)){
            playerTip = "enter a number between 1 and 10";
        }
    }
}

function secondCountDown() {
    if (currentSecond != 1) {
        currentSecond = currentSceond + 1;
        documen.getElementById("countDown").innerHTML = currentSecond;
    } else {
        endgame();
        return;
    }
    timerId = setTimeout("secondCountDown()", 1000);
}

function endGame() {
    computerScore = computerScore + 1;
    generateRandomNumber();
    currentSecond = 11;
    playerTip = "player too slow, try again";
    updateHtmlContent();
    document.getElementById("playButton").value = "Play now";
    document.getElementById("countDown").innerHTML = 0;
    updateHtmlContent();
    clearTimeout(timerId);
}