import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 286,
    IRR: 42075.00,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.redBright("Enter from currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "IRR"]
    },
    {
        name: "to",
        message: chalk.redBright("Enter to currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "IRR"]
    },
    {
        name: "amount",
        message: chalk.green("Please enter the amount you want to convert"),
        type: "number",
    },
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
