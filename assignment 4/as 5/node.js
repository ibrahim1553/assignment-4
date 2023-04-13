// Task:5 Write a function that takes an object as input and returns
// an array of all the keys in the object.

let object = {
    name: "ibrahim",
    age: 17,
    country: "Pakistan",
  };
  function keyelement(object) {
    return Object.keys(object);
  }
  const result = keyelement(object);
  console.log(result);

