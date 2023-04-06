#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function WelCome() {
    let rainbowTitle = chalkanimation.rainbow(`     Are you ready? \n \n   Lets start calculation  \n \n  { Developed by AasmaJanny } \n `); //start
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.yellowBright(` 
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`));
    console.log();
    // console.log(`${rainbowTitle} is fine`);
}
WelCome();
async function askQuestion() {
    const ans = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: chalk.bgMagentaBright("Which operation you want to perform? \n"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: chalk.green("Enter number 1: ")
        },
        {
            type: "number",
            name: "num2",
            message: chalk.redBright("Enter number 2: ")
        }
    ]);
    if (ans.operator == "Addition") {
        console.log(chalk.yellowBright(`  ${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));
    }
    else if (ans.operator == "Subtraction") {
        console.log(chalk.yellowBright(`   ${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));
    }
    else if (ans.operator == "Multiplication") {
        console.log(chalk.yellowBright(`   ${ans.num1}  * ${ans.num2} = ${ans.num1 * ans.num2}`));
    }
    else if (ans.operator == "Division") {
        console.log(chalk.yellowBright(`    ${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
    }
}
;
//   askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: chalk.blue(" Check Vowel again? press y for Yes and n for No: ")
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
