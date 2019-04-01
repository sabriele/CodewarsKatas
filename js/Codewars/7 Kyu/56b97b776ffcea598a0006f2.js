/* Bubblesort Once (7 Kyu) */

const bubblesortOnce = a => {
	var temp = a[0];
	var newArray = [];
	for (let n = 0; n < a.length; n++) {
		temp > a[n + 1]
			? (newArray[n] = a[n + 1])
			: ((newArray[n] = temp), (temp = a[n + 1]));
		// console.log(n + ":", newArray, temp);
	}
	console.log("Original:", a);
	console.log("Sorted  :", newArray);
};

// Array Mutation
/* const bubblesortOnce = a => {
	var temp;
	var newArray = a; // Mutates array a because of SHALLOW COPYING
	// var newArray = a.slice() // Does not mutate array
	for (let n = 0; n < newArray.length; n++) {
		if (newArray[n] > newArray[n + 1]) {
			temp = newArray[n];
			newArray[n] = newArray[n + 1];
			newArray[n + 1] = temp;
		}
	}
	console.log(a, newArray);
}; */

// With if-else
/* const bubblesortOnce = a => {
	var temp = a[0];
	var newArray = [];
	for (let n = 0; n < a.length; n++) {
		if (temp > a[n + 1]) {
			newArray[n] = a[n + 1];
		} else {
			newArray[n] = temp;
			temp = a[n + 1];
		}
		// console.log(n + ":", newArray, temp);
	}
	console.log("Original:", a);
	console.log("Sorted:", newArray);
}; */
