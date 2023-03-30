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
    const levels = [];
    new function push(node = root, level = 0) {
        if (!node)
            return;
        (levels[level] ??= []).push(node.val);
        for (const leaf of [node.left, node.right])
            push(leaf, level + 1);
    };
    return levels;
};

var levelOrderIterative = function(root) {
    const levels = [];
    for (let take, queue = root ? [root] : []; take = queue.length;) {
        for (let level = levels[levels.length] = [], node; take--; ) {
            level.push((node = queue.shift()).val);
            queue.push(...[node.left, node.right].filter(Boolean));
        }
    }
    return levels;
};
