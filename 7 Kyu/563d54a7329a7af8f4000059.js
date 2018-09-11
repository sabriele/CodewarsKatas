/* Put a Letter in a Column (7 Kyu) */

function buildRowText(index, character) {
	var arr = Array(19);
	for (let n = 0; n < arr.length; n++) {
		n % 2 === 0 ? (arr[n] = "|") : (arr[n] = " ");
		arr[index * 2 + 1] = character;
	}
	console.log(arr.join(""));
}
