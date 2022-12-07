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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(node, low, high) {
    if (!node) return 0;
    
    let sum = 0;
    if (low <= node.val && node.val <= high) {
        sum += node.val;
    }
    if (low <= node.val) sum += rangeSumBST(node.left, low, high);
    if (node.val <= high) sum += rangeSumBST(node.right, low, high);
    
    
    
    return sum;
};