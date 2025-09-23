// index.js

// 1. Built-in module
import fs from "fs";

// 2. Third-party module
import chalk from "chalk";

// 3. Custom modules
import { add, subtract, multiply, divide } from "./operations.js";
import { formatResult } from "./formatter.js";

//Console log registration number
console.log(chalk.blue.bold("Registration Number: BD/2025/TC3/023"));

// ---- Perform some calculations ----
let a = 20, b = 5;

let sum = formatResult(add(a, b));
let diff = formatResult(subtract(a, b));
let prod = formatResult(multiply(a, b));
let quotient = formatResult(divide(a, b));

// ---- Log results to console ----
console.log(chalk.green(`Addition: ${sum}`));
console.log(chalk.yellow(`Subtraction: ${diff}`));
console.log(chalk.magenta(`Multiplication: ${prod}`));
console.log(chalk.cyan(`Division: ${quotient}`));

// ---- Save results to a file using fs ----
let logData = `
Results of calculations:
Addition: ${sum}
Subtraction: ${diff}
Multiplication: ${prod}
Division: ${quotient}
`;

fs.writeFileSync("results.txt", logData);
console.log(chalk.bgGreen("Results saved to results.txt ✅"));
