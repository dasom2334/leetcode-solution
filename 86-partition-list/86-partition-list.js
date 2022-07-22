/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let p1 = new ListNode();
    let p2 = new ListNode();
    let pn1 = p1;
    let pn2 = p2;
    let node = head;
    while(node !== null) {
        if (node.val < x) {
            pn1.next = new ListNode(node.val);
            pn1 = pn1.next;
        } else {
            pn2.next = new ListNode(node.val);
            pn2 = pn2.next;
        }
        node = node.next;
    }
    // console.log(p1, p2);
    pn1.next = p2.next;
    return p1.next;
};