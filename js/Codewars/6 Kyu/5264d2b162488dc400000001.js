/* Stop gninnipS My sdroW! (6 Kyu) */

// Without reverse() method
function spinWords(sentence) {
	var words = sentence.split(" ");
	var reversedWords = [];
	words.forEach(word => {
		if (word.length >= 5) {
			var letters = word.split("");
			var reversedLetters = [];
			for (let i = 0; i < word.length; i++) {
				var letter = letters.pop();
				reversedLetters.push(letter);
			}
			var reversedWord = reversedLetters.join("");
			word = reversedWord;
		}
		reversedWords.push(word);
	});
	var newSentence = reversedWords.join(" ");
	return newSentence;
}

// With reverse() method and condensed
function spinWords(sentence) {
	var reversedWords = [];
	sentence.split(" ").forEach(word => {
		// word.length >= 5 ? (word = word.split("").reverse().join("")) : word;
		if (word.length >= 5) {
			word = word.split("").reverse().join("");
		}
		reversedWords.push(word);
	});
	return reversedWords.join(" ");
}
