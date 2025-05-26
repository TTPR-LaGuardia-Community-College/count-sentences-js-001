'use strict';

const countSentences = function(sentences){
  // Add code here...
  let count = 0;
  for(let i = 0; i<sentences.length;i++){
    if(sentences[i] === "?" || sentences[i] === "." || sentences[i] === "!"){
      count++;
    }
  }
  return count;
};

module.exports = countSentences;
