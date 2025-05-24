'use strict';

const countSentences = function(sentences) {
  if (!sentences) return 0;
  const matches = sentences.match(/[.!?]+/g);
  return matches ? matches.length : 0;
};


module.exports = countSentences;
