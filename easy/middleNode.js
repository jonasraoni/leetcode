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
var middleNode = function(head) {
    let middle = head;
    for (let i = 0; head = head.next; )
        if (++i % 2)
            middle = middle.next;
    return middle;
};

middleNode(new ListNode(1, new ListNode(2, new ListNode(3))))