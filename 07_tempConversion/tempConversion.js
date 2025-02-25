const convertToCelsius = function(tempF) {

let newTemp = (tempF -32) * (5/9);

if (typeof newTemp === 'number' && newTemp % 1 !== 0) { //Checks if number is float or integer
  return +newTemp.toFixed(1); //Converts to string with 1 decimal using "toFixed(1)", then back to a number with "+"
} else {
  return newTemp;
}
};

const convertToFahrenheit = function(tempC) {

let newTemp = (tempC * (9/5) + 32);

if (typeof newTemp === 'number' && newTemp % 1 !== 0) {
  return +newTemp.toFixed(1);
} else {
  return newTemp;
}

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
