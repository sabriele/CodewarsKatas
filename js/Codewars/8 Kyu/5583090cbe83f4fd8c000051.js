/* Convert number to reversed array of digits (8 Kyu) */

function digitize(n) {
	return n
		.toString()
		.split("")
		.map(Number)
		.reverse();
}
