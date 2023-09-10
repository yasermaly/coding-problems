// Write a function that takes an integer minutes and converts it to seconds.
/* Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
*/

// SOLUTION:
function convert(x) {
  const result = x * 60;
  return result;
}

console.log(convert(5));

/*
Create a function that takes two numbers as arguments and returns their sum.

Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10

*/

// SOLUTION:

function addition(a, b) {
  const result = a + b;
  return result;
}

console.log(addition(3, 2));
