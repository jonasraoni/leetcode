//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for (let i = 0; ++i < nums.length; nums[i] += nums[i - 1]);
    return nums;
};

var runningSum2 = function(nums) {
    return nums.map(n => nums += n, nums = 0);
};