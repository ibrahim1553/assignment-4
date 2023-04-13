// Task:1 Write a function that takes an array of numbers as input
//  and returns the sum of all even numbers in the array.
function sumEvenNumbers(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      sum += num[i];
    }
  }
  return sum;
}
const nums = [1, 2, 3, 4, 5, 6];
const result = sumEvenNumbers(nums);
console.log(result);