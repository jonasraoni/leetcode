//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return new function nodeFromMiddle(start = 0, end = nums.length - 1, middle = (start + end) >> 1) {
        return end < start || start >= nums.length ? null : new TreeNode(nums[middle], nodeFromMiddle(start, middle - 1), nodeFromMiddle(middle + 1, end));
    };
};