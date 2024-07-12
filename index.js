"use strict";

const prompt = require("prompt-sync")({sigint: true});

console.log("\n");

const userName = prompt("Hey GOT fan, What's your name? ");

console.log(`Welcome to the quiz ${userName}!`);

console.log("\n");

const arrayOfQuestions = [
    {
        question: "Who is the youngest of Ned Stark\’s children? ",
        answer: "Rickon"
    },{
        question: "Which noble character joins the band of assassins called \"Faceless Men\" in Braavos? ",
        answer: "Arya Stark"
    },{
        question: "Who had the nickname \"The Onion Knight\"? ",
        answer: "Davos Seaworth"
    },{
        question: "Which former ranger of the Night\’s Watch led an army of wildlings as the \“King-Beyond-the-Wall\”? ",
        answer: "Mance Rayder"
    },{
        question: "What are the \“house words\” of House Stark? ",
        answer: "Winter is Coming"
    },{
        question: "Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies? ",
        answer: "Beric Dondarrion"
    },{
        question: "What is the sigil of House Baratheon? ",
        answer: "A crowned Stag"
    },{
        question: "What is the name of Arya Stark\’s sword? ",
        answer: "Needle"
    },{
        question: "Grey Worm is the leader of which group? ",
        answer: "The unsullied"
    },{
        question: "Who masterminded the plot to kill King Joffrey Baratheon? ",
        answer: "Olenna Tyrell"
    }
];

for (let i = 0; i < arrayOfQuestions.length ; i++ ) {
    
    questionPopper( arrayOfQuestions[i].question , arrayOfQuestions[i].answer );

};

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



