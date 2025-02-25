const sumAll = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' ||
    num1 < 0 || num2 < 0 ||
    num1 % 1 !== 0 || num2 % 1 !== 0) {
    return "ERROR"
  }

  let sum = 0;
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;

};

// Do not edit below this line
module.exports = sumAll;
