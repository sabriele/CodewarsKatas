/* Find Count of Most Frequent Item in an Array (7 Kyu) */

function mostFrequentItemCount(collection) {
	var tallyBoard = {}; // object to keep track of number of occurences of each integer
	var counter = 0; // variable to keep track of the number of times the most frequent item occurs
	for (let i = 0; i < collection.length; i++) {
		var number = collection[i];
		tallyBoard[number] === undefined // does this number already exist in tallyBoard object?
			? (tallyBoard[number] = 1)
			: (tallyBoard[number] += 1); // if no, set initial value to 1; if yes, increment value

		// compare whether this is the most frequently occuring number
		if (tallyBoard[number] > counter) {
			counter = tallyBoard[number]; // set counter to tallyBoard[number]
		}
	}
	return counter;
}
