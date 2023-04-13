// Task:6 Write a function that takes an array of objects as input and returns 
//an array of all the values for a specified key in each object.
function getObjectValuesByKey(a1, key) {
    return a1.map(obj => obj[key]);
  }
  const A2 = [
    { name: 'ali', age: 18},
    { name: 'ahmad', age: 20 },
    { name: 'basit', age: 25 }
  ];
  
  const result = getObjectValuesByKey(A2, 'name');
  console.log(result);
