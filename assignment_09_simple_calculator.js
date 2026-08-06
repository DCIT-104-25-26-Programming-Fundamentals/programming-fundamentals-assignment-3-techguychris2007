// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
const readlineSync = require('readline-sync');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return null;
    }
    return a % b;
}

function exponentiate(a, b) {
    return a ** b;
}

function main() {
    while (true) {
        console.log('============================');
        console.log('SIMPLE CALCULATOR');
        console.log('============================');
        console.log('1. Addition');
        console.log('2. Subtraction');
        console.log('3. Multiplication');
        console.log('4. Division');
        console.log('5. Modulus');
        console.log('6. Exponentiation');
        console.log('7. Quit');

        const choice = readlineSync.questionInt('Select an operation (1-7): ');

        if (choice === 7) {
            console.log('Goodbye!');
            break;
        }

        const firstNumber = readlineSync.questionFloat('Enter first number: ');
        const secondNumber = readlineSync.questionFloat('Enter second number: ');

        let result;
        let symbol;

        if (choice === 1) {
            result = add(firstNumber, secondNumber);
            symbol = '+';
        } else if (choice === 2) {
            result = subtract(firstNumber, secondNumber);
            symbol = '-';
        } else if (choice === 3) {
            result = multiply(firstNumber, secondNumber);
            symbol = '*';
        } else if (choice === 4) {
            if (secondNumber === 0) {
                console.log('Error: Cannot divide by zero.');
                continue;
            }
            result = divide(firstNumber, secondNumber);
            symbol = '/';
        } else if (choice === 5) {
            if (secondNumber === 0) {
                console.log('Error: Cannot divide by zero.');
                continue;
            }
            result = modulus(firstNumber, secondNumber);
            symbol = '%';
        } else if (choice === 6) {
            result = exponentiate(firstNumber, secondNumber);
            symbol = '**';
        } else {
            console.log('Invalid choice. Please enter a number from 1 to 7.');
            continue;
        }

        console.log(`Result: ${firstNumber} ${symbol} ${secondNumber} = ${result.toFixed(2)}`);
    }
}

main();

