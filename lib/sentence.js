'use strict';

const countSentences = function(sentences){
  // Add code here...
  let secArray = sentences.split("");
  let sect = 0;
  for (let i = 0; i < secArray.length; i++) {
  	if (secArray[i] === "." || secArray[i] === "!" || secArray[i] === "?"){
  		sect ++;
  	};
  };
  return sect;
};

module.exports = countSentences;
