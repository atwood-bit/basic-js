const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new CustomError('THROWN');
  let res_arr = Object.assign([], arr);
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
      delete res_arr[i];
      if (i !== arr.length-1)
        delete res_arr[i+1];
      break;
      case '--discard-prev':
      delete res_arr[i];
      if (i !== 0)
        delete res_arr[i-1];
      break;
      case '--double-next':
      if (i !== arr.length-1)
        res_arr[i] = res_arr[i+1];
      else
        delete res_arr[i];
      break;
      case '--double-prev':
      if (i !== 0)
        res_arr[i] = res_arr[i-1];
      else
        delete res_arr[i];
      break;
    }
  }
  for (let i = 0; i < res_arr.length; i++) {
    if (res_arr[i] === undefined) {
      res_arr.splice(i,1);
      --i;
    }
  }
  return res_arr;
};
