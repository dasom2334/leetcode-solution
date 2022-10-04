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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root == null) return false;
    
    const dfs = (node, s = 0, ts = targetSum) => {
        if (node == null) return false;
        if (node.left == null && node.right == null) {
            return (ts == s + node.val) ?true:false;
        };
        
        let left = dfs(node.left, s + node.val);
        let right = dfs(node.right, s + node.val);
        
        return left || right;
    };
    return dfs(root);
};