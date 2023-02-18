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
var minDiffInBST = function(root) {
    const nums = []
    const dfs = (node) => {
        if (!node) return
        dfs(node.left)
        dfs(node.right)
        nums.push(node.val)
    }
    dfs(root)
    nums.sort((a, b) => b - a)
    const diffs = nums.map((e, i) => e - (nums[i + 1] || 0))
    diffs.pop()
    return Math.min(...diffs)
};