//+ Jonas Raoni Soares Silva
//@ http://raoni.org

var moveZeroes = function (nums) {
	let zeroes = 0;
	for (let i = -1, l = nums.length; ++i < l;) {
		if (!nums[i])
			++zeroes;
		else if (zeroes) {
			nums[i - zeroes] = nums[i];
			nums[i] = 0;
		}
	}
	return nums;
};