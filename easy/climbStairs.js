//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const cache = new Map();
    return +function check(current = 0) {
        return cache.get(current) ?? (cache.set(current, current = current === n ? 1 : current < n ? check(current + 1) + check(current + 2) : 0), current);
    }();
};
