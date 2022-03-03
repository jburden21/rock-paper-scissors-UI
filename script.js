function computerPlay(){
let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 1){
    return "rock";
  }
  else if (compChoice === 2){
    return "paper";
  }
  else {
    return "scissors";
  }
}

document.getElementById("rockBtn").addEventListener("click", playRound)
document.getElementById("paperBtn").addEventListener("click", playRound)
document.getElementById("scissorsBtn").addEventListener("click", playRound)

const playerChoice = document.querySelectorAll('button'); 


function playerPlay(){
if (playerChoice === 'rock'){
  return 'rock';
  }
else if (playerChoice === 'paper'){
  return 'paper';
  }
else {
  return 'scissors';
  }
}

let playerScore = 0;
let compScore = 0;
function playRound() {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();

  if ((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')){
    compScore++;

    if(compScore === 5){
      return "You Lose! Computer wins with a score of: "+compScore;
    }
    return "You Lose! "+ computerSelection + " beats " + playerSelection;
    
  }

  else if (computerSelection === playerSelection){
    return "You Tied!";
  }

  else {
    playerScore++;

    if(playerScore === 5){
      return "You Win! Player wins with a score of: "+playerScore;
    }
    
    return "You Win! " + playerSelection + " beats " + computerSelection;

    }
} 

function game(){
/** console.log(playRound())
  console.log(playRound())
  console.log(playRound())
  console.log(playRound())
  console.log(playRound()) **/
  if(playerScore > compScore){
    console.log("You Win! Player wins with a score of: "+playerScore)
  }
  else if(compScore > playerScore){
    return "You Lose! Computer wins with a score of: "+compScore;
  }
}
//game();



