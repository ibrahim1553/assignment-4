// Task:7 Write a function that takes an array of strings as input and returns 
// an array of all the unique strings in the array.

function getUniqueStrings(a1) {
    return [...new Set(a1)];
  }
  const a2 = ['potato', 'tomato', 'carrot', 'onion'];
const result = getUniqueStrings(a2);
console.log(result); 