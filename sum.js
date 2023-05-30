// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.


// Initialize a variable to store command line arguments to pass as input (process.argv)

const args = process.argv.slice(2);
console.log("Args:", args);

// Edge cases: We need at least 2 arguments.
// Check if there’s at least two arguments

let total = 0;

// go through the arguments
for (let arg of args) {
  // adding them up
  total += Number(arg); // typecasting 
  console.log("arg:", arg, "total:", total);
}

// Edge cases:If any argument is not a number, output an error message.

// Edge cases: If any argument is not a number, output an error message.


// print the sum
console.log("Total:", total);