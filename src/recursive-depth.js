const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let count = 1;
    let depthArr = 0;
    for (let item of arr) {
          if (Object.prototype.toString.call(item) === '[object Array]') {            
            count = this.calculateDepth(item);
            if (depthArr < count) {
              depthArr = count;
            }        
          }
    }
    return ++depthArr;    
  }
}
