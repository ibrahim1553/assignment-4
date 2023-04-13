// Task:2 Write a function that takes a string as input and returns 
// the number of vowels in the string.
function numofvowels(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      let str = string[i];
      if (string == "a"||
       string == "e"||
        string == "i"||
         string == "o"||
         string =="u")
        count++;
    }
    return count;
  }
  const result = numofvowels("hello world");
  console.log(result);