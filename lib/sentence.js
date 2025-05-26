'use strict';

const countSentences = function(sentences){
  // Add code here...
  let count = 0;
  if (sentences === ''){
      return 0;
  }
  if(sentences.indexOf('.') !== -1){
      count += sentences.split('.').length - 1;
  }
  if(sentences.indexOf('!') !== -1){
      count += sentences.split('!').length - 1;
  }

  if(sentences.indexOf('?') !== -1){
      count += sentences.split('?').length - 1;
  }

    return count;

};

module.exports = countSentences;
