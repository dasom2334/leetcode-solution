/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let ps = postorder.slice();
    
    const result = new TreeNode(ps.pop());
    
    const makeOrder = (node, left, right) => {
        const nip = inorder.indexOf(node.val);
        
        if (right !== nip && ps.length > 0) {
            const r = ps.pop();
            node.right = new TreeNode(r);
            makeOrder(node.right, nip+1, right);
        }
        
        if (left !== nip && ps.length > 0) {
            const l = ps.pop();
            node.left = new TreeNode(l);
            makeOrder(node.left, left, nip-1);
        }
    }
    
    makeOrder(result, 0, inorder.length - 1);
    return result;
};