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
    const root = new ListNode(0, head);
    const dfs = (node, parent) => {
        const num = (node.next == null) ? 1:dfs(node.next, node);
        if (num == n) {
            parent.next = node.next;
        }
        return num + 1;
    };
    dfs(root.next, root);
    return root.next;
};