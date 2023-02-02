//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var discover = (r, c) => {
        for (let stack = [[r, c]]; ([r, c] = stack.pop() ?? [])[0] != null; grid[r][c] = '0')
            for (const i of [1, -1, 2, -2])
                if (grid[r + i % 2]?.[c + ~i % 2] === '1')
                    stack.push([r + i % 2, c + ~i % 2]);
    };
    let islands = 0;
    for (let r = grid.length; r--;)
        for (let c = grid[r].length; c--;)
            if (grid[r][c] === '1') {
                discover(r, c);
                ++islands;
            }
    return islands;
};