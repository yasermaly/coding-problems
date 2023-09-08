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
