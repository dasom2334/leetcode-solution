/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [];
    let result = [];
    
    let node = root;
    while (stack.length > 0 || node != null) {
        
        while(node != null) {
            stack.push(node);
            node = node.left;
        }
        
        const pn = stack.pop();
        result.push(pn.val);
        node = pn.right;  
        // console.log(stack);
    }
    
    return result; 
};