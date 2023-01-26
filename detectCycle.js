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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const visited = new Set();
    while (head) {
        if (visited.has(head))
            return head;
        visited.add(head);
        head = head.next;
    }
    return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle2 = function(head) {
    let slow = head, fast = head;
    while ((slow = slow?.next) && (fast = fast?.next?.next) && slow !== fast);
    if (slow !== fast)
        return null;
    while ((slow = slow.next) !== head)
        if (slow === fast)
            head = head.next;
    return head;
};