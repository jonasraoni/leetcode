//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    let total = 0, hasOdd = 0;
    for (const c of s)
        map.set(c, (map.get(c) ?? 0) + 1);
    for (const count of map.values())
        total += (count & 1 ? (hasOdd = 1, count - 1) : count);
    return total + hasOdd;
};