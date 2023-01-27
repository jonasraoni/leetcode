//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var isAnagram = function(s, t) {
	if (s.length !== t.length)
		return false;
	const frequency = new Map();
	for (const c of s)
		frequency.set(c, (frequency.get(c) || 0) + 1);
	for (const c of t) {
		const available = frequency.get(c);
		if (!available)
			return false;
		frequency.set(c, available - 1);
	}
	return true;
};