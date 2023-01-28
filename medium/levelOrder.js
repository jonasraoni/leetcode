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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root)
        return [];
    const levels = [];
    for (let tuple, stack = [[root, 0]]; tuple = stack.pop();) {
        const [node, level] = tuple;
        (levels[level] ??= []).push(node.val);
        for (const leaf of [node.right, node.left])
            leaf && stack.push([leaf, level + 1]);
    }
    return levels;
};

var levelOrder2 = function(root) {
    const levels = [];
    !function navigate(node, levels, level) {
        if (!node)
            return;
        (levels[level] ??= []).push(node.val);
        for (const leaf of [node.left, node.right])
            navigate(leaf, levels, level + 1);
    }(root, levels, 0);
    return levels;
};
