//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var isValidSudoku = function (board) {
	const rows = new Array(9),
		boxes = new Array(9),
		columns = new Array(9);
	for (let i = 9; i--;) {
		rows[i] = new Set();
		boxes[i] = new Set();
		columns[i] = new Set();
	}
	for (let r = 9; r--;) {
		for (let c = 9; c--;) {
			const n = board[r][c];
			if (n === '.')
				continue;
			const column = columns[c],
				row = rows[r],
				box = boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)];
			if (row.has(n) || column.has(n) || box.has(n))
				return false;
			row.add(n);
			column.add(n);
			box.add(n);
		}
	}
	return true;
};