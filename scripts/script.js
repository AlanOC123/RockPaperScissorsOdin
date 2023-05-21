/* 
Write a function to generate a computer  choice.

Computer can choose Rock, Paper or Scissors
This must be done at Random
Here the computer will work with numbers
This is then return this value
Assign it to a variable to be used

Steps:
    1. Declare a function called computerChoice
    2. Initialize a variable called number
        - This will be a random number between 1 and 3
        - Random returns a value between 0 and 1
        - Add 1 to ensure its between 1 and 3
    3. Declare a variable called choice
        - This will store the return value
        - If number was 1 - choose Rock
        - Else If number was 2 - choose Paper
        - Else choose Scissors
    2. Use Maths Random lib to choose a number between 1 and 3
*/

// Function computerChoice
function getComputerChoice() {
    // Initialize choice
    let choice;

    // return number
    let number = Math.floor(Math.random() * 3) + 1;

    // Check number and assign choice its value depending on the value
    switch (number) {
        case 1:
            choice = 'Rock';
            break;
        case 2: 
            choice = 'Paper';
            break;
        case 3:
            choice = 'Scissors';
            break;
    };

    // Assign computerChoice the value of choice
    return choice;
}

/*
Write a function that allows the player to choose
    - Declare a variable called number
    - Declare a variable choice
    - Ask the player to put in 1, 2 or 3
    - Use a prompt and store it in a variable
    - This will be returned a string type so include the + or Number() to store it
    - If its not a < 1, > 3 or not a number keep prompting 
    - Like the computer this will be mapped to a string value
    - If the answer is 1 - Rock, 2 - Paper, 3 - Scissors
    - Switch case again
    - Assign value to choice
    - Return choice
*/

function getPlayerChoice() {
    // Declare Variables
    let number;
    let choice;

    // Get the number value
    // Use a while loop to keep trying

    // Declare aan initializer for the loop
    let keepGoing = true;
    
    while (keepGoing) {
        // Ask for number
        number = +prompt(' Enter a number between 1 and 3.\n Select:\n\t1: Rock\n\t2: Paper\n\t3: Scissors');

        // If its < 1 or > 3 or not a number alert and keep going
        if (Number.isNaN(number) || number < 1 || number > 3) {
            alert('Invalid value entered');
            keepGoing = true;
        } else {
            keepGoing = false;
        };
    }

    // Switch case
     switch (number) {
        case 1:
            choice = 'Rock';
            break;
        case 2: 
            choice = 'Paper';
            break;
        case 3:
            choice = 'Scissors';
            break;
    };

    return choice;
}

/*
    Last function we need is to check the two against each other called getResult
    - Take 2 parameters
    - Series of if statement
    - Rock beat scissors, Scissors beat paper, Paper beat rock
    - Keep going until the function ends
    - Declare the choices within the function
    -
*/

function getResult() {
    // Initial declaration
    let gameResult;
    let keepGoing = true;
    let playerChoice;
    let computerChoice;

    while (keepGoing) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        let playerWins = `Player wins: ${playerChoice} beats ${computerChoice}`;

        let computerWins = `Computer wins: ${computerChoice} beats ${playerChoice}`;

        console.log(computerChoice, playerChoice);

        if (computerChoice !== playerChoice) {

            if (playerChoice === 'Rock') {
                if (computerChoice === 'Paper') {
                    alert(computerWins);
                } else {
                    alert(playerWins);
                };

                keepGoing = false;

            } else if (playerChoice === 'Paper') {
                if (computerChoice === 'Scissors') {
                    alert(computerWins);
                } else {
                    alert(playerWins);
                };

                keepGoing = false;

            } else {
                if (computerChoice === 'Rock') {
                    alert(computerWins);
                } else {
                    alert(playerWins);
                };

                keepGoing = false;
            }

        }
    };

    return
    /*if (computerChoice != playerChoice) {

        // Check the results with the player in mind

        // 3 Scenarios

        // Player has Rock
        if (playerChoice === 'Rock') {
            // Computer has Paper - Player Loses
            if (computerChoice === 'Paper') {
                alert(computerWins);
            } else {
                alert(playerWins);
            }
        } else if (playerChoice === 'Paper') {
            if (computerChoice === 'Scissors') {
                alert(computerWins);
            } else {
                alert(playerWins);
            }
        } else {
            if (computerChoice === 'Rock') {
                alert(computerWins);
            } else {
                alert(playerWins);
            }
        };

    } else {
        alert('Draw');
    } */
};

getResult();