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
 * @return {number}
 */
var goodNodes = function(root) {
    let result = 0;
    
    const dfs = (node, max) => {
        if(!node) return;
        if (max <= node.val) result++;
        const newMax = Math.max(max, node.val);
        dfs(node.left, newMax);
        dfs(node.right, newMax);
        
    }
    dfs(root, -Infinity);
    
    return result;
};