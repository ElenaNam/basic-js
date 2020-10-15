const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error('Error'); 
  } else if (arr.length === 0){
    return [];

  }  else {
    let newArr = arr.slice();
    for (let i = 0; i < newArr.length; i++) {

      if (newArr[i] === '--discard-next'){
        newArr.splice(i,2, undefined);       


      } else if (newArr[i] === '--discard-prev'){
        if (i === 0){
          newArr.splice(i,1)
        } else {
          newArr.splice((i-1),2, undefined);
        }
        


      } else if (newArr[i] === '--double-next'){
        newArr.splice(i,1, newArr[i+1]);

      } else if (newArr[i] === '--double-prev'){
        if (newArr[i-1] !== undefined){
          newArr.splice(i,1,newArr[i-1]);
        } else {
          newArr.splice(i,1);
        }
        
      } else {
        newArr.push[i];
      }    

    }

    
    let result = newArr.filter(item => item !== undefined)
    return result;
    //console.log (arr);
    //console.log (newArr);
  }   
};