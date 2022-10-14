/*
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
var deleteMiddle = function(head) {
    
    const dfs = (node, depth) => {
        let totalDepth = 0;
        if (node.next != null) {
            totalDepth = dfs(node.next, depth+1);   
        } else {
            totalDepth = depth;   
        }
        
        if(Math.ceil(totalDepth / 2) == depth + 1) {
            const temp = node.next;
            node.next = temp.next;
            temp.next = null;
        }
        
        return totalDepth;
    }
    const root = new ListNode(0, head);
    dfs(root, -1);
    return root.next;
};