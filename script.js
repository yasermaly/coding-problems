/* Problem 1
 Write a function that takes an integer minutes and converts it to seconds.
Examples
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

/* Problem 2
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

/* Problem 3
Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2
*/

// SOLUTION:

function addition(a) {
  const result = a + 1;
  return result;
}
console.log(addition(9));

/* Problem 4
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
Notes
The area of a triangle is: (base * height) / 2
Don't forget to return the result.
*/

// SOLUTION

function triArea(base, height) {
  const result = (base * height) / 2;
  return result;
}
console.log(triArea(7, 4));
