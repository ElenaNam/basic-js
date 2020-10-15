const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array : [],
  
  getLength() {
    //return Object.keys(this).length;   
    return this.array.length;
  },
  addLink(value) {
   // if (typeof value === 'string') {
      value = '( '+ value + ' )';
      this.array.push(value);
      return this;   
   // } else {
      //this.array = [];
     // return this;
    //}
   
  
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 0 || position > this.array.length ){
      this.array = [];
      throw Error;      
    } else {        
      this.array.splice(position-1,1);        
      return this;
    }
  },
  reverseChain() {
   
      this.array.reverse();
      return this;
  },
  finishChain() {
    let str = this.array.join('~~'); 
    this.array = [];   
    return str;    

  }
};

module.exports = chainMaker;
