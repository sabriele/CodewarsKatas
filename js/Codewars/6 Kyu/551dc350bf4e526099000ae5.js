/* Dubstep (6 Kyu) */

function songDecoder(song) {
	var words = song.split("WUB");
	var sentence = "";
	for (i = 0; i < words.length; i++) {
		sentence += words[i] + " ";
	}
	sentence = sentence.replace(/  +/g, " ");
	return sentence.trim();
}
