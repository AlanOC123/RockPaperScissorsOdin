function displayRoundResult (status, playerScore, computerScore) {
  const container = document.querySelector('.container')
  const roundInfo = document.querySelector('.round-info')
  const roundStatus = document.querySelector('.round-status')

  if (status === 'draw') {
    roundStatus.textContent = 'DRAW'
    return
  }
  container.setAttribute('id', status)
  roundInfo.setAttribute('id', status)
  roundStatus.setAttribute('id', status)
  roundStatus.style.border = 'none'
  roundStatus.textContent = status === 'win' ? 'WINNER' : 'LOSER'

  setTimeout(() => {
    clearRoundResult()
  }, 2000)
}

function clearRoundResult () {
  const container = document.querySelector('.container')
  const roundInfo = document.querySelector('.round-info')
  const roundStatus = document.querySelector('.round-status')

  container.removeAttribute('id')
  roundInfo.removeAttribute('id')
  roundStatus.removeAttribute('id')
  roundStatus.textContent = 'CHOOSE'
}

const declareWinner = (playerScore, computerScore) => {
  let winner;
  const roundStatus = document.querySelector('.round-status')

  if (playerScore > 4 || computerScore > 4) {
    playerScore > computerScore ? winner = 'Player' : winner = 'Computer'
    roundStatus.textContent = `${winner} Wins!`;
    setTimeout(() => {
      alert("GAME OVER");
    }, 3000);
  }
}

const buttons = document.querySelectorAll(".buttons");

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3) + 1

  switch (computerChoice) {
    case 1:
      return 'rock'
    case 2:
      return 'paper'
    case 3:
      return 'scissors'
  }
}

const updatePlayerDisplay = (score) => {
  const display = document.querySelector('#player-score')
  display.textContent = score
}

const updateComputerDisplay = (score) => {
  const display = document.querySelector('#computer-score')
  display.textContent = score
}

let playerScore = 0
updatePlayerDisplay(playerScore)
let computerScore = 0
updateComputerDisplay(computerScore)

const playRound = (playerChoice) => {
  const computerChoice = getComputerChoice()

  if (playerChoice === computerChoice) {
    displayRoundResult('draw')
  }

  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      displayRoundResult('lose', playerScore, computerScore)
      computerScore++
      updateComputerDisplay(computerScore)
    } else {
      displayRoundResult("win");
      playerScore++
      updatePlayerDisplay(playerScore)
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      displayRoundResult('lose')
      computerScore++
      updateComputerDisplay(computerScore)
    } else {
      displayRoundResult("win");
      playerScore++
      updatePlayerDisplay(playerScore);
    }
  } else {
    if (computerChoice === 'rock') {
      displayRoundResult('lose')
      computerScore++
      updateComputerDisplay(computerScore);
    } else {
      displayRoundResult("win");
      playerScore++
      updatePlayerDisplay(playerScore);
    }
  }

  declareWinner(playerScore, computerScore);
}

buttons.forEach((button) => {
  button.addEventListener('click', button => {
    setTimeout(() => playRound(button.target.id), 1000)
  })
})

/*rockButton.addEventListener('click', (button) => {
  setTimeout(() => console.log(button.target.id), 2000)
})*/

/*
const getComputerChoice = () => Math.floor(Math.random() * 3) + 1
const getPlayerChoice = () =>
  prompt('Enter Rock, Paper of Scissors').toLowerCase()
const playerWins = (choice) => alert(`Player wins with a choice of ${choice}`)
const computerWins = (choice) =>
  alert(`Computer wins with a choice of ${choice}`)
const drawGame = (choice) => alert(`Draw, both players chose ${choice}`)

const container = document.querySelector('.container')

let playerScore = 0
let computerScore = 0

let computerChoice = getComputerChoice()

switch (computerChoice) {
  case 1:
    computerChoice = 'rock'
    break
  case 2:
    computerChoice = 'paper'
    break
  case 3:
    computerChoice = 'scissors'
    break
}

let playerChoice

while (!playerChoice) {
  playerChoice = getPlayerChoice()

  if (
    !(
      playerChoice === 'rock' ||
      playerChoice === 'paper' ||
      playerChoice === 'scissors'
    )
  ) {
    playerChoice = ''
  }
}

if (playerChoice === 'rock') {
  if (computerChoice === 'paper') {
    computerWins(computerChoice)
    computerScore++
  } else if (computerChoice === 'scissors') {
    playerWins(playerChoice)
    playerScore++
  } else {
    drawGame(playerChoice)
  }
} else if (playerChoice === 'paper') {
  if (computerChoice === 'scissors') {
    computerWins(computerChoice)
    computerScore++
  } else if (computerChoice === 'rock') {
    playerWins(playerChoice)
    playerScore++
  } else {
    drawGame(playerChoice)
  }
} else {
  if (computerChoice === 'rock') {
    computerWins(computerChoice)
    computerScore++
  } else if (computerChoice === 'paper') {
    playerWins(playerChoice)
    playerScore++
  } else {
    drawGame(playerChoice)
  }
}
*/
