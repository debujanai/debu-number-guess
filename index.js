#! /usr/bin/env node
import inquirer from 'inquirer';
// 1)Computer will generate a random number
// 2) User input for guessing number
// 3) Compare both numbers
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("You guessed it right");
}
else {
    console.log("You guessed it wrong!");
}
