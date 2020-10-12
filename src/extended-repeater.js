const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof(str)!== 'string' && str !== null && str !== undefined){
    str = ''+ str;
  }
  if (typeof(str)=== null){
    str = '' + null;
  }
  if (typeof(str)=== undefined){
    str = ' ' + undefined;
  }

  if (typeof(options.addition)!== 'string' && options.addition!== null && options.addition !== undefined){     
    //options.addition = (options.addition).toString();
    options.addition = ''+ options.addition;
  }
  if (typeof(options.addition)=== null){
      options.addition='null';
  }
    
  if (options.addition=== null){
    options.addition=String(null);
  }

  if (options.repeatTimes === undefined){
    options.repeatTimes = 1;
 }
  let array = [];
  for (i = 1; i <= options.repeatTimes; i++){   
    array.push (str);       
  }  

  if (options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
 }
  let arrayAdd = [];
  for (j = 1; j <= options.additionRepeatTimes; j++){
    arrayAdd.push(options.addition);
  }

  let c = '|';
 function additSeparator (c){    
    if (options.additionSeparator === undefined){
      return c;
    } else {
      return c = options.additionSeparator;
    }
  }  

  let stringAdd = arrayAdd.join(additSeparator(c)); 

  arrayResult = [];
  for (i = 0; i < array.length; i++){
    arrayResult.push(array[i] + stringAdd)
  }
  
  let n = '+';
  function addSeparator (n){    
    if (options.separator === undefined){
      return n;
    } else {
      return n = options.separator;
    }
  }  
    let result = arrayResult.join(addSeparator (n));
    return result;
  
 
  console.log (result);

};
  