const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsspeedOneSec = (turnsSpeed / 3600);  
  let result = {};
  result.turns = (2**disksNumber - 1);   
  result.seconds = Math.floor(result.turns / turnsspeedOneSec);
   return result;
};


