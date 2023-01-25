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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let root = new ListNode(), current = root;
    for (let node; list1 && list2;) {
        if (list1.val < list2.val)
            list1 = (node = list1).next;
        else
            list2 = (node = list2).next;
        current = current.next = node;
    }
    current.next = list1 ?? list2;
    return root.next;
};