//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var firstUniqChar = function(s) {
	const unique = new Map();
	const duplicated = new Set();
	for(let i = -1; ++i < s.length; ) {
		const c = s[i];
		if (unique.has(c)) {
			unique.delete(c);
			duplicated.add(c);
		} else if (!duplicated.has(c))
			unique.set(c, i);
	}
	for (const index of unique.values())
		return index;
	return -1;
};