//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = m + n; i-- && n; nums1[i] = nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n]);
};