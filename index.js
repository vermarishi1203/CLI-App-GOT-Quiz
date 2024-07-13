"use strict";

const prompt = require("prompt-sync")({sigint: true});

console.log("\n");

const userName = prompt("Hey GOT fan, What's your name? ");

console.log(`Welcome to the quiz ${userName}!`);

console.log("\n");

let currentScore = 0;

const arrayOfQuestions = [
    {
        question: "Who is the youngest of Ned Stark\’s children? ",
        answer: "Rickon Stark",
        difficulty: "Medium"
    },{
        question: "Which noble character joins the band of assassins called \"Faceless Men\" in Braavos? ",
        answer: "Arya Stark",
        difficulty: "Easy"
    },{
        question: "Who had the nickname \"The Onion Knight\"? ",
        answer: "Davos Seaworth",
        difficulty: "Medium"
    },{
        question: "Which former ranger of the Night\’s Watch led an army of wildlings as the \“King-Beyond-the-Wall\”? ",
        answer: "Mance Rayder",
        difficulty: "Medium"
    },{
        question: "What are the \“house words\” of House Stark? ",
        answer: "Winter is Coming",
        difficulty: "Easy"
    },{
        question: "Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies? ",
        answer: "Beric Dondarrion",
        difficulty: "Hard"
    },{
        question: "What is the sigil of House Baratheon? ",
        answer: "A Crowned Stag",
        difficulty: "Easy"
    },{
        question: "What is the name of Arya Stark\’s sword? ",
        answer: "Needle",
        difficulty: "Medium"
    },{
        question: "Grey Worm is the leader of which group? ",
        answer: "The Unsullied",
        difficulty: "Easy"
    },{
        question: "Who masterminded the plot to kill King Joffrey Baratheon? ",
        answer: "Olenna Tyrell",
        difficulty: "Hard"
    }
];

for (let i = 0; i < arrayOfQuestions.length ; i++ ) {
    
    questionPopper( arrayOfQuestions[i] );

};

function questionPopper ({ question, answer, difficulty }) {

    console.log(`Difficulty: ${difficulty}`);

    const userAnswer = prompt(question);
    
    if ( userAnswer.trim().toUpperCase() === answer.trim().toUpperCase()) {
        
        switch ( difficulty ) {

            case "Easy":
                currentScore++;
                break;

            case "Medium":
                currentScore += 2;
                break;
            
            case "Hard":
                currentScore += 3;
                break;
            
            default:
                currentScore++;
        };

        console.log("You are right!");
        
        console.log(`Your current score is: ${currentScore}`);

    }
    else {
        
        console.log("Sorry, wrong answer.");

        console.log(`The correct answer is: ${answer}`);

        console.log(`Your current score is: ${currentScore}`);
    }

    console.log("\n");

}

console.log(`Your final score is: ${currentScore}`);

