const getComputerChoice = () => Math.floor(Math.random() * 3) + 1
const getPlayerChoice = () =>
  prompt('Enter Rock, Paper of Scissors').toLowerCase()
const playerWins = (choice) => alert(`Player wins with a choice of ${choice}`)
const computerWins = (choice) =>
  alert(`Computer wins with a choice of ${choice}`)
const drawGame = (choice) => alert(`Draw, both players chose ${choice}`)

let game = 5

while (game) {
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
      playerChoice = '';
    }
  }

  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerWins(computerChoice)
      game--
    } else if (computerChoice === 'scissors') {
      playerWins(playerChoice)
      game--
    } else {
      drawGame(playerChoice)
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerWins(computerChoice)
      game--
    } else if (computerChoice === 'rock') {
      playerWins(playerChoice)
    } else {
      drawGame(playerChoice)
    }
  } else {
    if (computerChoice === 'rock') {
      computerWins(computerChoice)
      game--
    } else if (computerChoice === 'paper') {
      playerWins(playerChoice)
      game--
    } else {
      drawGame(playerChoice)
    }
  }
}
