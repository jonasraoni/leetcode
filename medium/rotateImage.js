//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var rotate = function (matrix) {
	// Given the width of a square, and a cell index, it circles through the cells clockwise
	const translate = function (i, size) {
		const quadrant = Math.floor(i % (size * 4) / size);
		const position = i % size;
		const corner = quadrant % 3 ? size : 0;
		const unit = quadrant < 2 ? position : size - position;
		return quadrant & 1 ? [unit, corner] : [corner, unit];
	};
	// Update the cells level by level
	for (let levels = matrix.length >> 1, level = -1; ++level < levels;) {
		// We need to move only the first N - 1 cells of the row
		for (let size = matrix.length - level * 2 - 1, i = -1; ++i < size;) {
			// And each cell needs to be swapped 3 times clockwise in order to reach its right position
			for (let sides = 4, j = 0; ++j < sides;) {
				const [r, c] = translate(j * size + i, size);
				// Swap the cells...
				[matrix[level][level + i], matrix[r + level][c + level]] = [matrix[r + level][c + level], matrix[level][level + i]];
			}
		}
	}
	return matrix;
};