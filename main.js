#! /usr/bin/env node 
// import the 'inquirer' module.
import inquirer from "inquirer";
// Declear constant 'answer' and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:  ",
    },
]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`Enter your sentence word are: ${word.length}`);
