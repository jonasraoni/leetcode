//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var intersect = function (nums1, nums2) {
	if (nums1.length > nums2.length)
		[nums1, nums2] = [nums2, nums1];
	const map = new Map();
	for (const n of nums1) {
		map.set(n, (map.get(n) || 0) + 1);
	}
	const r = [];
	for (const n of nums2) {
		const count = map.get(n);
		if (count) {
			r.push(n);
			map.set(n, count - 1);
		}
	}
	return r;
};