// Task:4 Write a function that takes an array of numbers as input and returns
// the average of all the numbers in the array.

function calculateAverage(numbers) {
    const total = numbers.reduce((acc, cur) => acc + cur, 0);
    const average = total / numbers.length;
    return average;
  }
  const numbers = [2, 4, 6, 8, 10];
  const result = calculateAverage(numbers);
  console.log(result);