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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0;
};