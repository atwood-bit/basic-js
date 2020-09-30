const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix === undefined || matrix.length === 0) return 0;
  let result = [].concat(...matrix);
  result = result.filter(el => el == '^^');
  return result.length;
};
