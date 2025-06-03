'use strict';

const countSentences = function(text){
  // Add code here...
  if (!text) {
    return 0;
  }
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "");
  return sentences.length;
};

module.exports = countSentences;
