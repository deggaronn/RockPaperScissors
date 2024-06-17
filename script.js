function getRandomComputerResult(){
    const options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
let playerScore = 0 

let computerScore = 0
function hasPlayerWonTheRounds(player,computer){
    return !!((player == "Rock"&&computer == "Scissors")||(player == "Scissors"&&computer == "Paper")||(player=="Paper"&&computer=="Rock"));
}

function getRoundResults(userOption){
    const computerResult=getRandomComputerResult();
    if(hasPlayerWonTheRound(userOption,computerResult)){
        playerScore+=1;
        return `Player wins! ${userOption} beats ${computerResult}`;
    }
    else if(userOption == computerResult){
        return `It's a tie! Both chose ${userOption}`;
    }
    else{
        computerScore+=1;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption){
    const result = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = result;
    if(playerScore == 3){
        winnerMsgElement.innerText = "Player has won the game!";
        optionsContainer.style.display = "none";
        resetGameBtn.style.display = "block";
    }else{
            winnerMsgElement.innerText = "Computer has won the game!";
            optionsContainer.style.display = "none";
            resetGameBtn.style.display = "block";
        }
}
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
}