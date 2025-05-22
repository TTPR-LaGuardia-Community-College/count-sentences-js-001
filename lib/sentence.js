'use strict';

const countSentences = function(sentences) {
	let count = 0;
	[...sentences].forEach(ch => {
		if(ch === '.' || ch === '!' || ch === '?') {
			++count;
		}
	});
	return count;
};

module.exports = countSentences;
