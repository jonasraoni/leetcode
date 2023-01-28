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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodes = [];
    for ( let node = head; node; nodes.push(node), node = node.next);
    const node = nodes.at(-n);
    return node === head ? node.next : (nodes.at(-n - 1).next = nodes.at(-n).next, head);
};