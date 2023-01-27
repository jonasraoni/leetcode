//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length)
        return false;
    let j = -1;
    for (let i = -1; ++i < s.length && (j = t.indexOf(s[i], j) + 1); );
    return !!j;
};
console.log(isSubsequence("abc", "ahbgdc"));