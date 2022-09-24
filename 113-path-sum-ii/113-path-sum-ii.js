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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const dfs = (node, s, ts = targetSum) => {
        if (node == null) return [];
        const ss = s + node.val;
        
        if (node.left == null && node.right == null) {
            if (ss == ts) {
                return [[node.val]];
            } else {
                return [];
            }
        }
        
        const returns = [...dfs(node.left, ss), ...dfs(node.right, ss)];
        
        return returns.map(e => [node.val, ...e]);
    }
    return dfs(root, 0);
};