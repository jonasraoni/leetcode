//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    for (var nodes = []; head; nodes.push(head), head = head.next);
    for (let i = nodes.length; i--; nodes[i].next = nodes[i - 1] ?? null);
    return nodes.at(-1) ?? null;
};