/* Take a Ten Minute Walk (6 Kyu) */

// Original submission - 325ms
function isValidWalk(walk) {
	if (walk.length !== 10) {
		return false;
	} else {
		var sum_x = 0;
		var sum_y = 0;
		walk.forEach(element => {
			var x = element === "n" ? 1 : element === "s" ? -1 : null;
			var y = element === "e" ? 1 : element === "w" ? -1 : null;
			sum_x += x;
			sum_y += y;
		});
		return sum_x === 0 && sum_y === 0 ? true : false;
	}
}

// Refactored submission - 289ms
function isValidWalk(walk) {
	if (walk.length !== 10) {
		return false;
	} else {
		var x = isOrigin("e", "w");
		var y = isOrigin("n", "s");
		return x && y ? true : false;
	}
	function isOrigin(dir_a, dir_b) {
		var distance_from_origin = 0;
		walk.forEach(direction => {
			var displacement =
				direction === dir_a ? 1 : direction === dir_b ? -1 : null;
			distance_from_origin += displacement;
		});
		return distance_from_origin === 0 ? true : false;
	}
}
