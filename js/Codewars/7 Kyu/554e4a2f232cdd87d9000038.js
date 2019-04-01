/* Complementary DNA (7 Kyu) */

function DNAStrand(dna) {
	var complements = [];
	dna.split("").forEach(symbol => {
		switch (symbol) {
			case "A":
				complements.push("T");
				break;
			case "T":
				complements.push("A");
				break;
			case "C":
				complements.push("G");
				break;
			case "G":
				complements.push("C");
				break;
		}
	});
	console.log(complements.join(""));

}
