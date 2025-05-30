'use strict';

const countSentences = function(sentences){
  // Add code here...
  let count = 0;
  if(sentences === "") {
    return 0;
  }
  for (let element of sentences){
    if(element === '!' || element === '?' || element === '.') {
      count ++;
    }
  }

  return count;
  
};

module.exports = countSentences;
