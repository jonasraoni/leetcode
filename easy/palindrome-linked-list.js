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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const nodes = [];
    for (let node = head; node; node = node.next)
        nodes.push(node);
    let steps = nodes.length >>> 1;
    for (let l = nodes.length; steps && nodes[steps - 1].val === nodes[l - steps].val; --steps);
    return !steps;
};