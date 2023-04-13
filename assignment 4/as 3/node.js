// Task:3 Write a function that takes an array of strings as input and returns
// the length of the longest string in the array.
function findLongestLength(a01) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
      if (a01[i].length > maxLength) {
        maxLength = a01[i].length;
      }
    }
    return maxLength;
  }
  const a01 = ["potato", "tomato", "onion", "carrot"];
  const result= findLongestLength(a01);
  console.log(result);