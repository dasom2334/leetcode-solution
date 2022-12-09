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
var maxAncestorDiff = function(root) {
    let diffMax = 0;
    
    const dfs = (node, min = Infinity, max = 0) => {
        // console.log(min, max)
        if (!node) return;
        
        
        min = Math.min(node.val, min);
        max = Math.max(node.val, max);
        
        diffMax = Math.max(diffMax, max - min);
        
        dfs(node.left, min, max);
        dfs(node.right, min, max);
    }
    
    dfs(root);
    // console.log(diffMax);
    return diffMax;
};