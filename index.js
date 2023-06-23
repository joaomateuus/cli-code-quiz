#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let player;
const sleep = (ms=2000) => new Promise((r) => setTimeout(r, ms))

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("Welcome to programquiz, lets tests your code knowledge")

    await sleep()
    rainbowTitle.stop()

    console.log(`
        ${chalk.bgGreen("HOW TO PLAY: ")}
        Im a terminal game and if you get any question wrong ${chalk.bgGreen("I'll be killed")} 
        so get all the questions right
    `)
};

async function getPlayerName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name ?',
        default() {
            return 'Player'
        }
    })

    player = answers.player_name;
}

async function questionOne() {
    const answer = await inquirer.prompt({
        name: 'question_one',
        type: 'list',
        message: 'What is a loop in programming?',
        choices: [
            'A - A data type.',
            'B - A pre-defined function in all programming languages.',
            'C - A control structure that allows executing a block of code repeatedly.',
            'D - A command to terminate program execution.'
        ]
    })

    return handleQuestionOneAnswer(
        answer.question_one == 'C - A control structure that allows executing a block of code repeatedly.'
    )
}

async function handleQuestionOneAnswer(isCorrect) {
    const spinner = createSpinner("checking answer...").start();
    await sleep();

    if(isCorrect) {
        spinner.success({text: `Nice work ${player}. Your Answer is correct`})
        questionTwo();
    } else {
        spinner.error({text: 'Wrong answer, You lose and Im killed :('})
        process.exit(1);
    }
}

async function questionTwo() {
    const answer = await inquirer.prompt({
        name: 'question_two',
        type: 'list',
        message: 'Which data structure follows the "First In, First Out" (FIFO) principle?',
        choices: [
            'A - Stack',
            'B - Queue',
            'C- Linked list',
            'D - Tree'
        ]
    })

    return handleQuestionTwoAnswer(answer.question_two == 'B - Queue')
}

async function handleQuestionTwoAnswer(isCorrect) {
    const spinner = createSpinner("checking answer...").start();
    await sleep();

    if(isCorrect) {
        spinner.success({text: `Nice work ${player}. Your Answer is correct`})
        questionThree()
    } else {
        spinner.error({text: 'Wrong answer, You lose and Im killed :('})
        process.exit(1);
    }
}

async function questionThree() {
    const answer = await inquirer.prompt({
        name: 'question_three',
        type: 'list',
        message: 'In object-oriented programming, what is encapsulation ?',
        choices: [
            'A - The process of hiding the implementation details and exposing only the necessary information to the outside world.',
            'B -  A programming paradigm that emphasizes the use of objects and their interactions to design and solve problems.',
            'C - The process of converting high-level programming code into machine-readable code.',
            'D -  A type of error that occurs during the execution of a program.'
        ]
    })

    return handleQuestionThreeAnswer(answer.question_two == 'A - The process of hiding the implementation details and exposing only the necessary information to the outside world.')
}

async function handleQuestionThreeAnswer(isCorrect) {
    const spinner = createSpinner("checking answer...").start();
    await sleep();

    if(isCorrect) {
        spinner.success({text: `Nice work ${player}. Your Answer is correct`})
    } else {
        spinner.error({text: 'Wrong answer, You lose and Im killed :('})
        process.exit(1);
    }
}

// async function questionFour() {}

// async function handleQuestionFourAnswer() {}

// async function QuestionFive() {}

// async function handleQuestionFiveAnswer() {}

// async function winner(){
//     console.clear();
//     const msg = `Congrats ${player} you won!!`;

//     figlet(msg, (err, data) => {
//         console.log(gradient.pastel.multiline(data));
//     });
// }


await welcome()
await getPlayerName()
await questionOne();


