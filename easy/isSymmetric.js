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
var isSymmetric = function(root) {
    function *navigate(node, first, second){
        for (const stack = [node]; stack.length;) {
            if ((yield node = stack.pop()))
                stack.push(node[first], node[second]);
        }
    }
    // Navigate through left/right sides, in a kind of mirrored way
    const left = navigate(root?.left, "left", "right"), right = navigate(root?.right, "right", "left");
    for (const node of left) {
        // The value must be always equal
        if (node?.val !== right.next().value?.val)
            return false;
    }
    return true;
};