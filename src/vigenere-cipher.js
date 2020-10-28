const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {

  constructor (mode=true) {
    this.mode = mode;
  }

  encrypt(message, key) {    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase().split('');  //массив
   
    let keyString = [];
    let keyArray = key.toUpperCase().split(''); 


    let messageArr = message.toUpperCase().split('');

    let ind = 0;
    let count = 0;
    let v = 0;
    let i = 0;
    for (i = 0; i < messageArr.length; i++) {  
 
                           
          if (alphabet.indexOf(messageArr[i]) === -1){            
              keyString.push(messageArr[i]); 
              count--;  
              ind++;                   

          // если символ сообщения есть в алфавите
          } else if (alphabet.indexOf(messageArr[i]) !== -1){            
                      
              v = i + count;            

             if (v < keyArray.length){
                for (; v < keyArray.length; v++){

                  //v = i + count;
                  keyString.push(keyArray[v]);
                  break
                } 
              } else if (v >= keyArray.length) {
                for (; v >= keyArray.length; v++){
                  v = i + count - keyArray.length;
                  if (v>= keyArray.length){
                    v = v - keyArray.length;
                    if(v>=keyArray.length){
                        v = v - keyArray.length;
                        if(v>=keyArray.length){
                            v = v - keyArray.length;
                            if(v>=keyArray.length){
                                v = v - keyArray.length;
                                if(v>=keyArray.length){
                                    v = v - keyArray.length;
                                    if(v>=keyArray.length){
                                      v = v - keyArray.length;
                                      if(v>=keyArray.length){
                                        v = v - keyArray.length;
                                        if(v>=keyArray.length){
                                          v = v - keyArray.length;
                                          if(v>=keyArray.length){
                                            v = v - keyArray.length;
                                            if(v>=keyArray.length){
                                              v = v - keyArray.length;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                              }
                          }
                      }
                  }
                  keyString.push(keyArray[v]);                                     
                  break
                }
                
              }

          }          
    }

      let keyString1 = keyString.join('');    // ALPHONSEALPHONS
      //console.log(keyString1); 

      let messageNumberArr = []; // массив чисел для message

      for (let j = 0; j < messageArr.length; j++) {
        if (alphabet.indexOf(messageArr[j]) === -1) {
          messageNumberArr.push(messageArr[j]);
        } else {
          messageNumberArr.push(alphabet.indexOf(messageArr[j])); 
        } 

      }

      let numberArr = []
      for (let z = 0; z < messageNumberArr.length; z++){

        messageNumberArr.forEach(el => function(el){
          if (isNaN(el) === 'false'){
            numberArr.push(el)
          }
        })
      }

      let keyNumberArr = [];   // массив чисел для key
      let keyArr = keyString1.split('');
     // console.log('keyArr ' + keyArr);
       
      
      for (let k = 0; k < keyString.length; k++) {
        if(alphabet.indexOf(keyString[k]) !== -1)  {
          keyNumberArr.push(alphabet.indexOf(keyString[k]));
        } else {
           keyNumberArr.push(keyString[k]); 
        }
       
      }     
     
  
      let resultNumberArr = [];   //массив чисел для зашифрованного сообщения
      for (let n = 0; n < message.length; n++) {
        let num = 0;
        if (typeof(messageNumberArr[n]) !== 'number'||typeof(keyNumberArr[n]) !== 'number'){
          resultNumberArr.push(messageArr[n])
        }else if ((messageNumberArr[n] + keyNumberArr[n]) < alphabet.length) {
          num = messageNumberArr[n] + keyNumberArr[n];
          resultNumberArr.push(num); 
        } else {
          num = (messageNumberArr[n] + keyNumberArr[n]) - alphabet.length;
          resultNumberArr.push(num); 
        }                
      }  
  
      let result = [];  //массив букв для криптограммы


      for (let r = 0; r < resultNumberArr.length; r++) {

          if (typeof(resultNumberArr[r]) === 'number') {

          result.push(alphabet[resultNumberArr[r]]);  

        } else{

          result.push(resultNumberArr[r]);
    
        }
        
      }
      //console.log(result);

      let res = result.join('');
      
      console.log (res)
      return res;

      //return this.cipher(message, key);   
  }    
   

  decrypt(message, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase().split('');  //массив
    let messageNumberArr = [];
    let messageArr = message.toUpperCase().split('');

      for (let j = 0; j < messageArr.length; j++) {
        if (alphabet.indexOf(messageArr[j]) !== -1){
          messageNumberArr.push(alphabet.indexOf(messageArr[j])); 
        }  else {
          messageNumberArr.push(messageArr[j]);
        }
        
      } 

    let keyString = [];
    let keyArray = key.toUpperCase().split('');
    let ind = 0;
    let count = 0;
    let v = 0;
    let i = 0;
    for (i = 0; i < messageArr.length; i++) {  
                           
          if (alphabet.indexOf(messageArr[i]) === -1){            
              keyString.push(messageArr[i]); 
              count--;  
              ind++;                   

          // если символ сообщения есть в алфавите
          } else if (alphabet.indexOf(messageArr[i]) !== -1){            
                      
              v = i + count;            

             if (v < keyArray.length){
                for (; v < keyArray.length; v++){

                  //v = i + count;
                  keyString.push(keyArray[v]);
                  break
                } 
              } else if (v >= keyArray.length) {
                for (; v >= keyArray.length; v++){
                  v = i + count - keyArray.length;
                  if (v>= keyArray.length){
                    v = v - keyArray.length;
                    if(v>=keyArray.length){
                        v = v - keyArray.length;
                        if(v>=keyArray.length){
                            v = v - keyArray.length;
                            if(v>=keyArray.length){
                                v = v - keyArray.length;
                                if(v>=keyArray.length){
                                    v = v - keyArray.length;
                                    if(v>=keyArray.length){
                                      v = v - keyArray.length;
                                      if(v>=keyArray.length){
                                        v = v - keyArray.length;
                                        if(v>=keyArray.length){
                                          v = v - keyArray.length;
                                          if(v>=keyArray.length){
                                            v = v - keyArray.length;
                                            if(v>=keyArray.length){
                                              v = v - keyArray.length;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                              }
                          }
                      }
                  }
                  keyString.push(keyArray[v]);                                     
                  break
                }
                
              }

          }          
    }
   

      let keyString1 = keyString.join(''); 

      let keyNumberArr = [];   // массив чисел для key
      let keyArr = keyString1.split('');
     // console.log('keyArr ' + keyArr);       
      
      for (let k = 0; k < keyString.length; k++) {
        if(alphabet.indexOf(keyString[k]) !== -1)  {
          keyNumberArr.push(alphabet.indexOf(keyString[k]));
        } else {
           keyNumberArr.push(keyString[k]); 
        }
       
      }  

      let resultNumberArr = [];                          
      for (let n = 0; n < message.length; n++) {
        let num = 0;
        if (typeof(messageNumberArr[n]) !== 'number'||typeof(keyNumberArr[n]) !== 'number'){
          resultNumberArr.push(messageArr[n])
        } else if ((messageNumberArr[n] - keyNumberArr[n]) >= 0) {
          num = messageNumberArr[n] - keyNumberArr[n];
          resultNumberArr.push(num); 
        } else {
          num = (messageNumberArr[n] - keyNumberArr[n]) + alphabet.length;
          resultNumberArr.push(num); 
        }  
         
      } 

      let result = [];  
       for (let r = 0; r < resultNumberArr.length; r++) {
          if (typeof(resultNumberArr[r]) === 'number') {  
          result.push(alphabet[resultNumberArr[r]]);
        } else{
          result.push(resultNumberArr[r]);    
        }        
      }                                  

      let res = result.join(''); //строка
      return res;
    }
      //return this.cipher(crypt, key);  
   
  if (mode = false){
    let res = res.split("").reverse().join(""); //=> массив => разворот => строка
    return res;
  }  
}




/*const directMachine = new VigenereCipheringMachine()
directMachine.encrypt('attack at dawn!', 'alphonse'); //'AEIHQX SX DLLU!'
directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'); 
//'LEARN FRONTEND DEVELOPMENT :)'*/


module.exports = VigenereCipheringMachine;
