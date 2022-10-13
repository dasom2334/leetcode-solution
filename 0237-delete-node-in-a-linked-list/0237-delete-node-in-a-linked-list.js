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
    let n = node;
    while (n.next.next != null) {
        n.val = n.next.val;
        n = n.next;
    }
    
    n.val = n.next.val;
    n.next = null;
    
};