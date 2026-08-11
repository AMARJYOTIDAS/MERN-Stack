// console.log("hello world");
// let arr = [1,2,3,5,6];
// const sumOfarr = (arr) =>{
//     sum = 0;
//   for( let num of arr){

//    sum += num;

//   }
//   return(sum);
// };

// sumOfarr(arr);
// console.log(sum);

// Reverse  a Number...


// const original = [1, 2, 3];
// const reversed = [];

// for (let i = original.length - 1; i >= 0; i--) {
//   reversed.push(original[i]);
// }

// console.log(reversed); // [3, 2, 1]


// AMSTRONG NUMBER
let num = 154;
let original = num;
let digits = num.toString().length;
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit ** digits;   // digit raised to the power of number of digits
    num = Math.floor(num / 10);
}

if (sum === original) {
    console.log(original + " is an Armstrong number");
} else {
    console.log(original + " is not an Armstrong number");
}

// FIND A MISSING NUMBER ====

let numbers = [1, 2, 3, 5];
let n = 5;

let total = 0;

// Add all numbers from the array
for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}

// Sum of numbers from 1 to n
let expected = (n * (n + 1)) / 2;

// Missing number
let missing = expected - total;

console.log("Missing number is:", missing);