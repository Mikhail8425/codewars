var number = function(array) {
  return array.map(function(value, index) {
    return ((index + 1) + ": " + value);
  });
};

const number2 = function(array) {
  const arr2 = [];
  for (let i = 0; i < array.length; i++) {
    arr2.push(`${i + 1}` + ": " + array[i]);
  }
  return arr2;
};

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]