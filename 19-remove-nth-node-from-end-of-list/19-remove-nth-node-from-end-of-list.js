/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next == null) {
        return null;
    }
    let node = head;
    let nodes = [head];
    let isHeadOut = false;
    while(node.next !== null) {
        nodes.push(node.next);
        if(nodes.length > n + 1) {
            nodes.shift();
            isHeadOut = true;
        }
        node = node.next;
    }
    if (!isHeadOut && n == nodes.length) head = nodes[1];
    else nodes[0].next = nodes[1].next;
    return head;
};