
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

//console.log(getComputerChoice());
//created a prompt to get the human choice
function getHumanChoice(){
    return prompt("Rock, paper, scissors?");
}

//console.log(getHumanChoice());
//Added the starting scores of the game.

let humanScore = 0;
let computerScore = 0;

//Created the function for the game that compares the computer and human choice, and gives scores based on choices.

function playRound(humanChoice, computerChoice){
    console.log(computerChoice);
    console.log(humanChoice);
    if (humanChoice === computerChoice){
       return "it's a draw";
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore ++ ;
        return ("paper beats rock, you lose");
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore ++ ;
        return ("paper beats rock, you win");
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        computerScore ++ ;
        return ("scissors beats paper, you win");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore ++ ;
        return ("scissors beats paper, you lose");
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore ++ ;
        return ("rock beats scissors, you lose");
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore ++ ;
        return ("rock beats scissors, you win");
    }
}
//Created function for 5 rounds and to call the score at the end.
function playGame(){
    //let round = playRound(getHumanChoice().toLowerCase(), getComputerChoice())
console.log(playRound(getHumanChoice().toLowerCase(), getComputerChoice()));
console.log(playRound(getHumanChoice().toLowerCase(), getComputerChoice()));
console.log(playRound(getHumanChoice().toLowerCase(), getComputerChoice()));
console.log(playRound(getHumanChoice().toLowerCase(), getComputerChoice()));
console.log(playRound(getHumanChoice().toLowerCase(), getComputerChoice()));

console.log(humanScore);
console.log(computerScore);

}

playGame();