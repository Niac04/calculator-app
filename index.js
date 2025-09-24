import fs from "fs";
import chalk from "chalk";
import { add, subtract, multiply, divide } from "./operations.js";
import { formatResult } from "./formatter.js";

console.log(chalk.blue.bold("Registration Number: BD/2025/TC3/023"));

let a = 20, b = 5;


let sum = formatResult(add(a, b));
let diff = formatResult(subtract(a, b));
let prod = formatResult(multiply(a, b));
let quotient = formatResult(divide(a, b));

console.log(chalk.green(`Addition: ${sum}`));
console.log(chalk.yellow(`Subtraction: ${diff}`));
console.log(chalk.magenta(`Multiplication: ${prod}`));
console.log(chalk.cyan(`Division: ${quotient}`));

let logData = `
Results of calculations:
Addition: ${sum}
Subtraction: ${diff}
Multiplication: ${prod}
Division: ${quotient}
`;

fs.writeFileSync("results.txt", logData);
console.log(chalk.bgGreen("Results saved to results.txt ✅"));