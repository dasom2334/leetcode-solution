/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const result = new TreeNode(preorder[0], null, null);
    
    let op = preorder.slice(1);
    const makeOrder = (node, left, right) => {
        const nip = inorder.indexOf(node.val);
        
        if (left !== nip && op.length > 0) {
            const l = op.shift();
            node.left = new TreeNode(l);
            makeOrder(node.left, left, nip-1);
        }
        
        if (right !== nip && op.length > 0) {
            const r = op.shift();
            node.right = new TreeNode(r);
            makeOrder(node.right, nip+1, right);
            
        }
        
    }
    
    
    makeOrder(result, 0, preorder.length-1);
    
    return result;
};