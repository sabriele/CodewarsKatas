/* Regex validate PIN code (7 Kyu) */

function validatePIN(pin) {
	if (Number.isInteger(Number(pin))) {
		if (pin.length === 4 || pin.length === 6) {
			return true;
		}
	}
	return false;
}
