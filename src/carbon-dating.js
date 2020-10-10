const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (Number(sampleActivity)>0 && Number(sampleActivity)< MODERN_ACTIVITY && typeof(sampleActivity) === 'string') {
    let N = Math.ceil(sampleActivity);
    let act = MODERN_ACTIVITY / N;
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.ceil(act / k);
    return t;

  } else {
    return false;
  }
 
};

