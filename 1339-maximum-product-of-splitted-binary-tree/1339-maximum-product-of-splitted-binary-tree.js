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
var maxProduct = function(head) {
    const totalSum = (function dfsSum(node) {
        if (!node) return 0;
        return dfsSum(node.left) + dfsSum(node.right) + node.val;
    })(head);
    
    let result = 0;
    const modulo = 1000000007;
    
    const dfs = (node) => {
        if (!node) return 0;
        const left = dfs(node.left);
        const right = dfs(node.right);
        result = Math.max(result, (totalSum - left) * left, (totalSum - right) * right);
        return left + right + node.val;
    }
    dfs(head);
    return result % modulo;
};