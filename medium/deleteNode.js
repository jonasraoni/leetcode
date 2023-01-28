//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    do
        node.val = node.next.val;
    while (node.next.next ? node = node.next : false);
    node.next = null;
};