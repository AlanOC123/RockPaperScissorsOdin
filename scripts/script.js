/* Write a function to generate a computer  choice.

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
function computerChoice() {
    // Initialize choice
    let choice;

    // return number
    let number = Math.floor(Math.random() * 3) + 1;

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

