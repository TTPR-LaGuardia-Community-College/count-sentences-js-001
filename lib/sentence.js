'use strict';

const countSentences = function(text){
  // Add code here...
  if (!text) {
    return 0;
  }
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "");
  return sentences.length;
};

// Test Cases:

const paragraph = "This is the first sentence. Here's another! Is this the third?";
const sentenceCount = countSentences(paragraph);
console.log(sentenceCount);

const paragraph2 = "This is a test with decimals 1.23. Another sentence!";
const sentenceCount2 = countSentences(paragraph2);
console.log(sentenceCount2); 

const paragraph3 = "   ";
const sentenceCount3 = countSentences(paragraph3);
console.log(sentenceCount3) 

const paragraph4 = null;
const sentenceCount4 = countSentences(paragraph4);
console.log(sentenceCount4) 

module.exports = countSentences;
