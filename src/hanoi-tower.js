const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let count = Math.pow(2, disksNumber)-1;
  let sec = Math.floor(count * 3600 / turnsSpeed);
  return { turns: count, seconds: sec }
};
