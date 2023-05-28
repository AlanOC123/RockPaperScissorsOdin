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
