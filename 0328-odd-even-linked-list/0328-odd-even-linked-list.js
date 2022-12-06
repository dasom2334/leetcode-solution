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
var oddEvenList = function(head) {
    if (!head) return head;
    const evens = new ListNode(null);
    
    const dfs = (node, even) => {
        if (!node.next) {
            node.next = evens.next;
            return;
        } else if (!node.next.next) {
            even.next = node.next;
            node.next = evens.next;
            return;
        }
        const nextEven = node.next;
        const nextOdd = nextEven.next;
        
        nextEven.next = null;
        even.next = nextEven;
        
        node.next = nextOdd;
        
        dfs(nextOdd, nextEven);
        
        
    }
    dfs(head, evens);
    return head;
};