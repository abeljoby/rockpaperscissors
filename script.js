function getPlayerChoice() {
    let choice = prompt("Choose rock, paper or scissors:","rock");
    return choice.toLowerCase();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
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

function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = getPlayerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    switch (humanSelection) {
        case 'rock':
            if(computerSelection === 'paper')
                return -1;
            else if(computerSelection === 'scissors')
                return 1;
            break;
        case 'paper':
            if(computerSelection === 'rock')
                return 1;
            else if(computerSelection === 'scissors')
                return -1;
            break;
        case 'scissors':
            if(computerSelection === 'paper')
                return 1;
            else if(computerSelection === 'rock')
                return -1;
            break;
        default:
            break;
    }
    return 0;
}

function playGame(num) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0;i<num;i++) {
        if(playRound() === 1) {
            console.log("You win this round!");
            playerScore++;
        }
        else if(playRound() === -1) {
            console.log("You lose this round!");
            computerScore++;
        }
        else {
            console.log("You draw this round!");
        }
        console.log(`Score: ${playerScore}-${computerScore}`);
    }
}

playGame(5);