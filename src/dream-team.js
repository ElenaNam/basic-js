const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Object.prototype.toString.call(members) !== '[object Array]') {
    return false;  
  } else {
    array = []; 
    for (let i = 0; i < members.length; i++){  
               
      if (typeof(members[i]) === 'string' && !Number(members[i].charAt(0)) && members[i] !== ' '){            
        let name = members[i].trim();       
        let nameTeam = name.substr(0,1).toUpperCase();        
        array.push(nameTeam);        
      }
    }    
  }
  return array.sort().join('');
};