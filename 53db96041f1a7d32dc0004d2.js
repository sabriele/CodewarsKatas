/* Did I Finish my Sudoku? (5 Kyu) */

function doneOrNot(board) {
	/*	Initial thoughts:
		This is a 2D Array!
		3 tests to check for /duplicates/
		- Test 1: Rows aka all numbers within one array
		- Test 2: Columns aka all of same elements in arrays
		- Test 3: Regions. So only:
				- Array0[0], Array0[3], Array0[6]
				- Array3[0], Array3[3], Array3[6]
				- Array6[0], Array6[3], Array6[6]
		If pass Test 1 && 2 && 3, return "Finished!"
		Else return "Try again!"
	*/	
	
	function checkRows() {
		/*	How to obtain a row?
			- simply board[0], board[1] and so on
			-> for every row, sort then check for duplicates */
		var rows = [];
		for (let i = 0; i < board.length; i++) {
			var row = [];
			for (let j = 0; j < board.length; j++) {
				row.push(board[i][j]);
			}
			rows.push(row);
		}
		return validate(rows);
	}

	function checkColumns() {
		/*	How to obtain a column?
			- board[0][0], board[1][0], board [2][0] and so on and so forth i++
			- when i reaches 9, j increases j++
			- stop process when j reaches 9
			- store as column[0], column[1] etc.
			-> for every column, sort then check for duplicates */
		var columns = [];
		for (let j = 0; j < board.length; j++) {
			var column = [];
			for (let i = 0; i < board.length; i++) {
				column.push(board[i][j]);
			}
			columns.push(column);
		}
		return validate(columns);
	}

	function checkRegions() {
		/*	How to obtain a region?
			Starting points: 
			- board[0][0], board[0][3], board[0][6]
			- board[3][0], board[3][3], board[3][6]
			- board[6][0], board[6][3], board[6][6]
			e.g. Region 0: 	board[0][0], board[0][1], board[0][2], 
							board[1][0], board[1][1], board[1][2], 
							board[2][0], board[2][1], board[2][2]
			-> for every region, sort then check for duplicates */
		var regions = [];
		for (let m = 0; m < board.length; m = m + 3) {
			for (let n = 0; n < board.length; n = n + 3) {
				var region = [];
				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						region.push(board[i + m][j + n]);
					}
				}
				regions.push(region);
			}
		}
		return validate(regions);
	}

	function sortAndCheck(inputs) {
		var sortedArray = inputs.sort();
		for (let i = 0; i < sortedArray.length; i++) {
			if (sortedArray[i] === sortedArray[i + 1]) {
				return false;
			}
		}
		return true;
	}

	function validate(items) {
		var results = [];
		items.forEach(item => {
			results.push(sortAndCheck(item));
		});
		console.log(results);
		return results.every(result => result === true);
	}

	return checkRows() && checkColumns() && checkRegions()
		? "Finished!"
		: "Try again!";
}

/******************************************************************************/

// Original Submission

function doneOrNot(board) {
	function checkRow() {
		var rows = [];
		for (let i = 0; i < board.length; i++) {
			rows = board[i];
			sortAndCheck(rows);
		}
	}

	function checkColumn() {
		var column = [];
		for (let j = 0; j < board.length; j++) {
			for (let i = 0; i < board.length; i++) {
				column.push(board[i][j]); // confirm this
			}
			// does this belong inside or outside this loop?
			sortAndCheck(column);
		}
	}

	function checkRegion() {
		var region = [];
		for (let n = 0; n < board.length; n = n + 3) {
			// how to skip by threes?
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					region.push(board[i + n][j + n]);
				}
				// does this belong inside or outside this loop?
				sortAndCheck(region);
			}
		}
	}

	function sortAndCheck(inputs) {
		var sortedArray = inputs.sort();
		for (let i = 0; i < sortedArray.length; i++) {
			if (sortedArray[i] !== sortedArray[i + 1]) {
				return false;
			}
		}
		return true;
	}

	return checkRow() && checkColumn() && checkRegion()
		? "Finished!"
		: "Try again!";
}
