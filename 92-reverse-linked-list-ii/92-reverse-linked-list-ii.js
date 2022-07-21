/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let list = [];
    let node = head;
    let order = 1;
    while (order < left) {
        node = node.next;
        order++;
    }
    // console.log(order);
    while (order <= right) {
        list.push(node);
        node = node.next;
        order++;
    }
    // console.log(list);
    for (let i = 0; i < list.length/2; i++) {
        let temp = list[i].val;
        list[i].val = list[list.length - i - 1].val;
        list[list.length - i - 1].val = temp;
    }
    // console.log(list);
    
    return head;
};