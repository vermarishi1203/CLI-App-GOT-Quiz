"use strict";

import chalk from "chalk";
import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true});

console.log("\n");

const userName = prompt(chalk.magentaBright("Hey GOT fan, What's your name? "));

console.log(chalk.greenBright(`Welcome to the quiz ${userName}!`));

console.log("-----------------------------------");
console.log(chalk.bold.underline.yellowBright("RULES:"));
console.log("-> This quiz has 10 questions");
console.log("-> Out these 10 question, there are 4 easy, 4 medium and 2 hard questions");
console.log("-> If you answer correctly, you will win points : 1 for easy, 2 for medium and 3 for hard questions.");
console.log("-> The maximum possible score is 18 points.");
console.log("-> Type your answer and press enter to submit.If the answer is two or more words, seperate the words using a single white space.");
console.log(chalk.bold.cyan("Have Fun!"));
console.log("-----------------------------------");

console.log("\n");

let currentScore = 0;

const arrayOfQuestions = [
    {
        question: "Who is the youngest of Ned Stark\’s children? ",
        answer: ["Rickon Stark", "Rickon"],
        difficulty: "Medium"
    },{
        question: "Which noble character joins the band of assassins called \"Faceless Men\" in Braavos? ",
        answer: ["Arya Stark", "Arya"],
        difficulty: "Easy"
    },{
        question: "Who had the nickname \"The Onion Knight\"? ",
        answer: ["Davos Seaworth", "Ser Davos Seaworth", "Sir Davos Seaworth", "Ser Davos", "Sir Davos", "Davos"],
        difficulty: "Medium"
    },{
        question: "Which former ranger of the Night\’s Watch led an army of wildlings as the \“King-Beyond-the-Wall\”? ",
        answer: ["Mance Rayder", "Mance Raider", "Manse Rayder", "Manse Raider", "Mance", "Manse"],
        difficulty: "Medium"
    },{
        question: "What are the \“house words\” of House Stark? ",
        answer: ["Winter is Coming"],
        difficulty: "Easy"
    },{
        question: "Which character, also known as the Lightning Lord, gets continually resurrected by Thoros of Myr after he dies? ",
        answer: ["Beric Dondarrion", "Baric Dondarrion", "Beric Dondarion", "Baric Dondarion", "Beric", "Baric"],
        difficulty: "Hard"
    },{
        question: "What is the sigil of House Baratheon? ",
        answer: ["A Crowned Stag", "Crowned Stag", "A Stag", "Stag"],
        difficulty: "Easy"
    },{
        question: "What is the name of Arya Stark\’s sword? ",
        answer: ["Needle", "The Needle"],
        difficulty: "Medium"
    },{
        question: "Grey Worm is the leader of which group? ",
        answer: ["The Unsullied", "Unsullied"],
        difficulty: "Easy"
    },{
        question: "Who masterminded the plot to kill King Joffrey Baratheon? ",
        answer: ["Olenna Tyrell", "Lady Olenna Tyrell", "Lady Olenna", "Lady Tyrell", "Olenna"],
        difficulty: "Hard"
    }
];

for (let i = 0; i < arrayOfQuestions.length ; i++ ) questionPopper( arrayOfQuestions[i] );

function questionPopper ({ question, answer, difficulty }) {

    console.log(chalk.yellow(`Difficulty: ${difficulty}`));

    const userAnswer = prompt(question);

    const isAnswerCorrect = answer.some( currentAnswer => currentAnswer.trim().toUpperCase() === userAnswer.trim().toUpperCase());

    if ( isAnswerCorrect ) {
        
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

        console.log(chalk.greenBright("You are right!"));
        
        console.log(chalk.blueBright(`Your current score is: ${currentScore}`));

    }
    else {
        
        console.log(chalk.redBright("Sorry, wrong answer."));

        console.log(chalk.greenBright(`The correct answer is: ${answer[0]}`));

        console.log(chalk.blueBright(`Your current score is: ${currentScore}`));
    }

    console.log("\n");

}

console.log(chalk.bold.italic.greenBright(`Your final score is: ${currentScore}`));

console.log("-----------------------------------");

const highScores = [
    {
        playerName: "George RR Martin",
        score: 18
    },{
        playerName: "Hardcore GOT fan",
        score: 16
    },{
        playerName: "Rishi",
        score: 15
    },{
        playerName: "Average GOT fan",
        score: 13
    }
];

console.log(chalk.bold.underline.magentaBright(`HIGH SCORES:`));

highScores.forEach(({playerName, score}) => {
    
    console.log(chalk.cyan(`Player: ${playerName}`));
    console.log(chalk.white(`Score: ${score}`));

    });

console.log("-----------------------------------");

console.log(chalk.bgRed("If you want your name to be displayed in HIGH SCORES, take a screenshot of your score and send it to Rishi ;)"));

console.log("\n");

