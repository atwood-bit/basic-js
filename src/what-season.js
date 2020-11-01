const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.isValid()) throw new Error('THROWN');
  let seasons = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth() + 1;
  if (month >= 12 || month <= 0) month = 0;
  return seasons[Math.floor(month/3)];
};

Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
};
