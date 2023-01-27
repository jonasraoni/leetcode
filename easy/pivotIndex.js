//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    nums.reduce((t, c, i) => nums[i] = t + c, 0);
    for (let i = -1, l = nums.at(-1); ++i < nums.length;)
        if (~~nums[i - 1] === l - nums[i])
            return i;
    return -1;
};