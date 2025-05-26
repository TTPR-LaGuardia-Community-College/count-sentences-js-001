'use strict';

const countSentences = function(sentences){
  // Add code here...
   if (!sentences || sentences.length === 0) return 0;

  const matched = sentences.match(/[^.!?]+[.!?]/g);

  return matched ? matched.length : 0;
  
};

module.exports = countSentences;
