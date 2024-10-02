function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'error';
    }
}

function playRound(choice) {
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    hand.src = `./${computerSelection}.png`;
    const playerSelection = choice;
    if(playerSelection === computerSelection) {
        outcome.textContent = "Draw!";
    }
    else {
        switch (playerSelection) {
            case 'rock':
                if(computerSelection === 'paper') {
                    computerScore++;
                    outcome.textContent = "You lose!";
                }
                else if(computerSelection === 'scissors') {
                    playerScore++;
                    outcome.textContent = "You win!";
                }
                break;
            case 'paper':
                if(computerSelection === 'rock') {
                    playerScore++;
                    outcome.textContent = "You win!";
                }
                else if(computerSelection === 'scissors') {
                    computerScore++;
                    outcome.textContent = "You lose!";
                }
                break;
            case 'scissors':
                if(computerSelection === 'paper') {
                    playerScore++;
                    outcome.textContent = "You win!";
                }
                else if(computerSelection === 'rock') {
                    computerScore++;
                    outcome.textContent = "You lose!";
                }
                break;
        }
    }
    score.textContent = `${playerScore}-${computerScore}`;
}

const button = document.querySelectorAll("button");
const score = document.querySelector("#score");

const outcome = document.querySelector("#outcome");
const hand = document.querySelector("#robot");

for (b of button) {
    b.addEventListener("click",(e) => playRound(e.target.classList[0]));
}

let playerScore = 0;
let computerScore = 0;

// for (let i=0;i<num;i++) {
//     if(playRound() === 1) {
//         console.log("You win this round!");
//         playerScore++;
//     }
//     else if(playRound() === -1) {
//         console.log("You lose this round!");
//         computerScore++;
//     }
//     else {
//         console.log("You draw this round!");
//     }
//     console.log(`Score: ${playerScore}-${computerScore}`);
// }

