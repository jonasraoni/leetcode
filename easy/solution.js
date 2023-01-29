//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(h) {
        for (let l = -1, m; h - l > 1; isBadVersion(m = l + (h - l >>> 1)) ? h = m : l = m);
        return h;
    };
};