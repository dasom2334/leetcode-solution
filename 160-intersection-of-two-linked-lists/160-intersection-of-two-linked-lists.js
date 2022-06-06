/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    let visited = [];
    while (a != null || b != null) {
        // console.log(a, b, visited);
        if (visited.includes(a)) {
            // console.log(a);
             return a;
        } else if (a != null) {
            visited.push(a);
            a = a.next;
        }
        if (visited.includes(b)) {
            // console.log(b);
             return b;
        } else if (b != null) {
            visited.push(b);
            b = b.next;
        }
    }
    // return a;
};