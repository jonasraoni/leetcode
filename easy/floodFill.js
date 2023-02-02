//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const target = image[sr][sc], stack = [[sr, sc]];
    if (target === color)
        return image;
    for (let r, c; ([r, c] = stack.pop() ?? [])[0] != null; image[r][c] = color)
        for (const i of [1, -1, 2, -2])
            if (image[r + i % 2]?.[c + ~i % 2] === target)
                stack.push([r + i % 2, c + ~i % 2]);
    return image;
};