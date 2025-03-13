const add = function(addA, addB) {
	return addA + addB;
};

const subtract = function(subA, subB) {
	return subA - subB;
};

const sum = function(array) {
  return array.reduce((sum, current) => sum + current, 0);	
};

const multiply = function(array) {
  return array.reduce((multiplied, current) => multiplied * current, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
}

const factorial = function(a) {
	let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
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
