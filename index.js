"use strict";

const prompt = require("prompt-sync")({sigint: true});

const userName = prompt("Hey GOT fan, What's your name? ");

console.log("\n");

console.log(`Welcome to the quiz ${userName}!`);

console.log("\n");

const question1 = "Who is the youngest of Ned Stark’s children? ";
const answer1 = "Rickon";

questionPopper(question1, answer1);

function questionPopper (question, answer) {

    const userAnswer = prompt(question);

    if ( userAnswer === answer) {
        console.log("You are right!");
    }
    else {
        console.log("Sorry, wrong answer.");
    }
    console.log("\n");

}



