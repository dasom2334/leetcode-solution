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
    const head = new ListNode();
    let h = head;
    let l1 = list1;
    let l2 = list2;
    
    while(l1 || l2) {
        h.next = new ListNode();
        h = h.next;
        if ((l1?.val ?? 101)  < (l2?.val ?? 101)) {
            h.val = l1.val;
            l1 = l1.next;
        } else {
            h.val = l2.val;
            l2 = l2.next;
        }
        
        
    }
    
    return head.next;
};