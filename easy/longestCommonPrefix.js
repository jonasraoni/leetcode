//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    for (let i = -1, s = strs[0], c; c = s[++i]; prefix += c)
        for (const s of strs)
            if (s[i] !== c)
                return prefix;
    return prefix;
};