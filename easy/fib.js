//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    return Math.round(((Math.sqrt(5) + 1) / 2) ** Math.abs(n) / Math.sqrt(5));
};