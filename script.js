//Added the starting scores of the game.
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const playerSpan = document.querySelector(".player-score")
const compSpan = document.querySelector(".computer-score")

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

//created a prompt to get the human choice
    //function getHumanChoice(){
    //return prompt("Rock, paper, scissors?");
    //}

//console.log(getHumanChoice());




//Created the function for the game that compares the computer and human choice, and gives scores based on choices.

function playRound(playerSelection, computerChoice){
    
    if (playerSelection === computerChoice){
//creates p element, adds text to p element, and adds the p element to DOM
       const p = document.createElement("p")
       p.innerText = "it's a draw";
       outcomeDiv.appendChild(p)
    } else if (playerSelection == "rock" && computerChoice == "paper"){
        computerScore ++ 
        const p = document.createElement("p") 
        p.innerText = "paper beats rock, you lose";
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "paper" && computerChoice == "rock"){
        playerScore ++ ;
        const p = document.createElement("p") 
        p.innerText = "paper beats rock, you win";
        outcomeDiv.appendChild(p)
    } else if (playerSelection== "scissors" && computerChoice == "paper"){
        computerScore ++ 
        const p = document.createElement("p") 
        p.innerText = "scissors beats paper, you win";
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "paper" && computerChoice == "scissors"){
        computerScore ++ 
        const p = document.createElement("p") 
        p.innerText = "scissors beats paper, you lose";
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "scissors" && computerChoice == "rock"){
        computerScore ++ 
        const p = document.createElement("p") 
        p.innerText = "rock beats scissors, you lose";
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "rock" && computerChoice == "scissors"){
        playerScore ++ 
        const p = document.createElement("p") 
        p.innerText = "rock beats scissors, you win";
        outcomeDiv.appendChild(p)
    }
}

const whoWon = (playerScore, computerScore) => {
    if (playerScore === 5){
        const h2 = document.createElement("h2")
        h2.innerText = "YOU WON!"
        outcomeDiv.appendChild(h2)
    } else if (computerScore === 5){
        const h2 = document.createElement("h2")
        h2.innerText = "YOU LOST!"
        outcomeDiv.appendChild(h2)
    }
    
}
//Adding the scores to the page
const updateScores = (playerScore, computerScore) =>{
    playerSpan.innerText = `${playerScore}`
    compSpan.innerText = `${computerScore}`
}

//add eventListener to buttons
rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const playerSelection = "rock"
    playRound(playerSelection,computerChoice)
    updateScores(playerScore, computerScore)
    whoWon(playerScore, computerScore)
})
paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const playerSelection = "paper"
    playRound(playerSelection,computerChoice)
    updateScores(playerScore, computerScore)
    whoWon(playerScore, computerScore)
})
scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const playerSelection = "scissors"
    playRound(playerSelection,computerChoice)
    updateScores(playerScore, computerScore)
    whoWon(playerScore, computerScore)
})



//Created function for 5 rounds and to call the score at the end.
//const playGame = () => {
    //for(let i = 0; i < 5; i++)
       // const playerSelection = prompt ("Rock, Paper, Scissors").toLowerCase
       // const computerChoice = getComputerChoice
//}



//playGame();

