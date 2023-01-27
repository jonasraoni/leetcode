//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var twoSum = function (nums, target) {
	for (let map = new Map(), i = nums.length; i--;) {
		const j = map.get(target - nums[i]);
		if (j != null)
			return [i, j];
		map.set(nums[i], i);
	}
};