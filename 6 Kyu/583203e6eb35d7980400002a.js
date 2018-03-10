/* Count the smiley faces! (6 Kyu) */

//return the total number of smiling faces in the array
function countSmileys(arr) {
	// for each element in array
	// search for : or ; only
	// then search for -, ~, or ""
	// then search for ) or D
	var count = 0;
	if (arr.length === 0) {
		return count;
	} else {
		arr.forEach(element => {
			if (element.charAt(0).match(/:|;/g)) {
				if (element.charAt(1).match(/-|~/g)) {
					if (element.charAt(2).match(/\)|D/g)) {
						count++;
					}
				} else if (element.charAt(1).match(/\)|D/g)) {
					count++;
				}
			}
		});
		return count;
	}
}
