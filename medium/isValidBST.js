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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return (function isValid(node, leftWall, rightWall) {
        const val = node.val, left = node.left?.val, right = node.right?.val;
        return (left == null || (left < val && (leftWall == null || left > leftWall) && isValid(node.left, leftWall, val)))
            && (right == null || (right > val && (rightWall == null || right < rightWall) && isValid(node.right, val, rightWall)));
    })(root);
};