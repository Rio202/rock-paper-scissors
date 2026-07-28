
//Added the starting scores of the game.
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
//create boolean var to track game status, enables stop after certain no. of rounds in function later
let gameEnded = false;

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const playerSpan = document.querySelector(".player-score")
const compSpan = document.querySelector(".computer-score")
const resetGameDiv = document.querySelector(".reset")

//Declared the computers random choices to return a sting.
function getComputerChoice(){
    let randomInt = Math.floor(Math.random()* 3);
    if (randomInt == 0){
        return "rock";
    } else if (randomInt == 1){
        return "paper";
    } else if ( randomInt == 2) {
        return "scissors";
    }
    
}

//Created the function for the game that compares the computer and human choice, and gives scores based on choices.

function playRound(playerSelection, computerChoice){ 
    const p = document.querySelector(".outcome-p")
    if (playerSelection === computerChoice){
//creates p element, adds text to p element, and adds the p element to DOM
       p.innerText = "it's a draw";
    } else if (playerSelection == "rock" && computerChoice == "paper"){
        computerScore ++ 
        p.innerText = "paper beats rock, you lose";
    } else if (playerSelection == "paper" && computerChoice == "rock"){
        playerScore ++ ;
        p.innerText = "paper beats rock, you win";
    } else if (playerSelection== "scissors" && computerChoice == "paper"){
        computerScore ++ 
        p.innerText = "scissors beats paper, you win";
    } else if (playerSelection == "paper" && computerChoice == "scissors"){
        computerScore ++ 
        p.innerText = "scissors beats paper, you lose";
    } else if (playerSelection == "scissors" && computerChoice == "rock"){
        computerScore ++ 
        p.innerText = "rock beats scissors, you lose";
    } else if (playerSelection == "rock" && computerChoice == "scissors"){
        playerScore ++ 
        p.innerText = "rock beats scissors, you win";
    }
    rounds++ //counts rounds played
}

//Adding the scores to the page
const updateScores = (playerScore, computerScore) =>{
    playerSpan.innerText = `Player: ${playerScore}`
    compSpan.innerText = `Computer: ${computerScore}`
}

//function to update h2 element in html showing game result
const whoWon = (playerScore, computerScore) => {
    const h2 = document.querySelector("h2")
    if (playerScore === 5){ 
        gameEnded = true
        h2.innerText = "YOU WON!"
    } else if (computerScore === 5){
        gameEnded = true
        h2.innerText = "YOU LOST!"
    }
    //added gameEnded for when player/comp gets to 5 points and game is ended
    if (gameEnded){
        endGame()
    }
}

//function for game is still playable (!gameEnded) means not gameEnded
function playGame(playerSelection, computerChoice){
    if (!gameEnded) {
       playRound(playerSelection, computerChoice);
    } 
}

function endGame(){
    console.log("game ended")
}    

//add eventListener to buttons
rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const playerSelection = "rock"
    playGame(playerSelection,computerChoice)
    updateScores(playerScore, computerScore)
    whoWon(playerScore, computerScore)
    
})
paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const playerSelection = "paper"
    playGame(playerSelection,computerChoice)
    updateScores(playerScore, computerScore)
    whoWon(playerScore, computerScore)
  
    
})
scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const playerSelection = "scissors"
    playGame(playerSelection,computerChoice)
    updateScores(playerScore, computerScore)
    whoWon(playerScore, computerScore)
   
    
})


//Created function for 5 rounds and to call the score at the end.





//playGame();

