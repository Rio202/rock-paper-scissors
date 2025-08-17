


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

function getHumanChoice(){
    return prompt("Rock, paper, scissors?");
}

//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


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