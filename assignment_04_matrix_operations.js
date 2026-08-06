// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        let values = [];

        while (values.length !== cols) {
            const input = readlineSync.question(`Enter row ${i + 1}: `).trim();
            values = input.split(/\s+/).filter(Boolean).map(Number);

            if (values.length !== cols) {
                console.log(`Please enter exactly ${cols} numbers.`);
            }
        }

        matrix.push(values);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let line = '';
        for (let j = 0; j < matrix[i].length; j++) {
            line += matrix[i][j].toString().padEnd(4);
        }
        console.log(line);
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let col = 0; col < cols; col++) {
        const newRow = [];
        for (let row = 0; row < rows; row++) {
            newRow.push(matrix[row][col]);
        }
        transposed.push(newRow);
    }

    return transposed;
}

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        return null;
    }

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }

    return result;
}

function main() {
    console.log('Choose an operation:');
    console.log('1. Transpose a matrix');
    console.log('2. Add two matrices');
    console.log('3. Multiply two matrices');
    console.log('4. Exit');

    const choice = readlineSync.questionInt('Enter your choice: ');

    if (choice === 1) {
        const rows = readlineSync.questionInt('Enter number of rows: ');
        const cols = readlineSync.questionInt('Enter number of columns: ');
        const matrix = readMatrix(rows, cols);

        console.log('\nOriginal Matrix:');
        displayMatrix(matrix);

        const transposed = transposeMatrix(matrix);
        console.log('\nTransposed Matrix:');
        displayMatrix(transposed);
    } else if (choice === 2) {
        const rows = readlineSync.questionInt('Enter number of rows: ');
        const cols = readlineSync.questionInt('Enter number of columns: ');

        console.log('Enter Matrix A:');
        const matrixA = readMatrix(rows, cols);
        console.log('Enter Matrix B:');
        const matrixB = readMatrix(rows, cols);

        const result = addMatrices(matrixA, matrixB);
        console.log('\nResult Matrix:');
        displayMatrix(result);
    } else if (choice === 3) {
        const rowsA = readlineSync.questionInt('Enter number of rows for Matrix A: ');
        const colsA = readlineSync.questionInt('Enter number of columns for Matrix A: ');
        const rowsB = readlineSync.questionInt('Enter number of rows for Matrix B: ');
        const colsB = readlineSync.questionInt('Enter number of columns for Matrix B: ');

        if (colsA !== rowsB) {
            console.log('Error: Number of columns in Matrix A must equal number of rows in Matrix B.');
            return;
        }

        console.log('Enter Matrix A:');
        const matrixA = readMatrix(rowsA, colsA);
        console.log('Enter Matrix B:');
        const matrixB = readMatrix(rowsB, colsB);

        const result = multiplyMatrices(matrixA, matrixB);
        if (result === null) {
            console.log('Error: Matrix dimensions are not compatible for multiplication.');
        } else {
            console.log('\nResult Matrix:');
            displayMatrix(result);
        }
    } else if (choice === 4) {
        console.log('Goodbye!');
    } else {
        console.log('Invalid choice.');
    }
}

main();

