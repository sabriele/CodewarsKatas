/* Your order, please. (6 Kyu) */

function order(words) {
	/* if string empty, return empty string
	   else 
	   split string into array of string elements
	   search (match) string elements for number using regex
	   return number, use number to put that string into array element n-1
	   add returned string element to sentence using array.join(' ')
	*/
	if (words === "") {
		return "";
	} else {
		var words_array = words.split(" ");
		var sentence_array = [];
		words_array.forEach(element => {
			var n = element.match(/[1-9]/g);
			sentence_array[n - 1] = element;
		});
		return (sentence = sentence_array.join(" "));
	}
}
