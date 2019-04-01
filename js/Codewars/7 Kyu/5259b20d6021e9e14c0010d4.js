/* Reverse words (7 Kyu) */

function reverseWords(str) {
	var words = str.split(" ");
	var reversedWords = [];
	words.forEach(word => {
		var reversedWord = word.split("").reverse().join("");
		reversedWords.push(reversedWord);
	});
	console.log(reversedWords.join(" "));
}

// Unmoisturised, rather DRY code :)
/* function reverseWords(str) {
	var reversedWords = [];
	str.split(" ").forEach(word => {
		reversedWords.push(word.split("").reverse().join(""));
	});
	console.log(reversedWords.join(" "));
} */

// Some Ender-style genius way someone else did
/* function reverseWords(str) {
	return str.split("").reverse().join("").split(" ").reverse().join(" ");
} */
