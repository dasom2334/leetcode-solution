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
    if (!head.next) return head;
    
    const dfs = (node, depth = 0) => {
        if (!node.next) {
            if (depth === 1) return node;
            return Math.ceil(depth/2);
        }
        
        const rt = dfs(node.next, depth + 1);
        if (rt === depth) {
            return node;
        }
        return rt;
    }
    
    return dfs(head);
};