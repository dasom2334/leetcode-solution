/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let tl1 = l1;    
    let tl2 = l2;
    let sincerely = false;
    
    const result = new ListNode();
    let tResult = result;
    while (true) {
        
        let sum = (tl1==null ? 0 : tl1.val) + (tl2==null ? 0 : tl2.val)
        if (sincerely) sum++;
        tResult.val = sum % 10;
              
        sincerely = (sum >= 10)?true:false;

        if (tl1) tl1 = tl1.next;
        if (tl2) tl2 = tl2.next;
        if (!tl1 && !tl2) break;
        tResult.next = new ListNode();
        tResult = tResult.next;

    }
    if (sincerely) {
        tResult.next = new ListNode(1);
    }
    return result;
};