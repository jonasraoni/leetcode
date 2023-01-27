//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const source = new Map(), target = new Map();
    for (let i = -1; ++i < s.length;) {
        if ((source.get(s[i]) ?? (source.set(s[i], t[i]), t[i])) !== t[i] || (target.get(t[i]) ?? (target.set(t[i], s[i]), s[i])) !== s[i])
            return false;
    }
    return true;
};

var isIsomorphic3 = function(s, t) {
    const map = new Map(), used = new Set();
    for (let i = -1; ++i < s.length;) {
        const c = map.get(s[i]);
        if (c) {
            if (c !== t[i])
                return false;
            continue;
        }
        if (used.has(t[i])) {
            return false;
        }
        used.add(t[i]);
        map.set(s[i], t[i]);
    }
    return true;
};