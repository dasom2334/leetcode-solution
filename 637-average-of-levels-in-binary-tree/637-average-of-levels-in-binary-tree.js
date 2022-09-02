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
var averageOfLevels = function(root) {
    
    let result = [];
    
    const dfs = (node, level) => {
        if (node == null) return;
        if (!result[level]) result[level] = [];
        result[level].push(node.val);
        
        dfs(node.left, level+1);
        dfs(node.right, level+1);
    }
    dfs(root, 0);
    
    return result.map(e => e.reduce((p, c) => p + c, 0) / e.length);
};