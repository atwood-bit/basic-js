const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (!members || members.length === 0) return false;
  let name_team = '';
  members.forEach(function(item, i, members){
    if (typeof(item) === 'string') {
      item = item.trim();
      name_team += item[0];
    }
  });
  if (name_team !== '') {
    let result = name_team.toUpperCase().split('');
    return result.sort().join('');
  }
  return false;
};
