//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const items = [];
    if (!root)
        return items;
    for (let node, stack = [root]; node = stack.pop(); ) {
        items.push(node.val);
        for (let nodes = node.children, i = nodes.length; i--; stack.push(nodes[i]));
    }
    return items;
};

var preorder2 = function(root) {
    const items = [];
    if (!root)
        return items;
    !function navigate(parent, items) {
        items.push(parent.val);
        for (const node of parent.children)
            navigate(node, items);
    }(root, items);
    return items;
};