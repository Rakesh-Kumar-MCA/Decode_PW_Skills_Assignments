// creating a program to calculate the sum of numbers

let num = 11;
let i = 0;
let currentNumber = 1;
do {
  i += currentNumber;
  currentNumber++;
} while (currentNumber <= num);

console.log(`sum of the number from 1 to ${num} is ${i}`);
