//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var singleNumber = function (nums) {
	const set = new Set();
	for (const n of nums) {
		if (set.has(n))
			set.delete(n);
		else
			set.add(n);
	}
	return [...set][0];
};