//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let h = nums.length;
    for (let l = -1, m; h - l > 1; nums[m = l + (h - l >>> 1)] < target ? l = m : h = m);
    return nums[h] !== target ? -1 : h;
};