// Task:8 Write a function that takes an array of numbers as input and returns 
// the product of all the numbers in the array.

let a00 = [1, 2, 3, 4, 5];
function product(a00) {
  let mul = 1;
  for (let i = 0; i < a00.length; i++) {
    mul = mul * a00[i];
  }
  return mul;
}
const result = product(a00);
console.log(result);