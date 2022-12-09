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
var maxAncestorDiff = function(node, min = Infinity, max = 0, diffMax = 0) {
    // console.log(min, max)
    if (!node) return 0;


    min = Math.min(node.val, min);
    max = Math.max(node.val, max);

    const cur = Math.max(diffMax, max - min);

    const left = maxAncestorDiff(node.left, min, max, cur);
    const right = maxAncestorDiff(node.right, min, max, cur);

    return Math.max(cur, left, right)
};