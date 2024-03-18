const convertToCelsius = function (temp) {
  let converted;
  let rounded;
  converted = (temp - 32) * 5/9;
  rounded = converted.toFixed(1);
  return parseFloat(rounded)
};

const convertToFahrenheit = function (temp) {
  let converted;
  let rounded;
  converted = temp * (9 / 5) + 32;
  rounded = converted.toFixed(1);
  return parseFloat(rounded)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
