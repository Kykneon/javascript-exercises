const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  for (let int of array) {
    sum += int;
  }
  return sum;
};

const multiply = function (array) {
  let sum = array[0];
  for (i = 1; i <= array.length - 1; i++) {
    sum = sum * array[i];
  }
  return sum;
};

const power = function (val, pow) {
  let result = val;
  for (i = 1; i < pow; i++) {
    result = result * val;
  }
  return result;
};

const factorial = function (num) {
  let result = num;
  if (num === 0) {
    return 1;
  } else {
    for (i = num - 1; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
