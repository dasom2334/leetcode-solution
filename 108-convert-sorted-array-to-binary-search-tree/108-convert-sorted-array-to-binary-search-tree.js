/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const ri = Math.ceil((nums.length - 1)/2);
    let result = new TreeNode();
    
    
    const nodeBirth = (node, l, r) => {
        const i = Math.ceil((l + r)/2);
        node.val = nums[i];
        
        if (l <= i - 1) {
            node.left = new TreeNode();
            nodeBirth(node.left, l, i - 1);
        }
        
        if (i + 1 <= r) {
            node.right = new TreeNode();
            nodeBirth(node.right, i + 1, r);
        }
        
    };
    nodeBirth(result, 0, nums.length - 1);
    
    
    
    return result;
};