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
var pseudoPalindromicPaths  = function(root) {
    
    const dfs = (node, dict = {}) => {
        if (node == null) return 0;
        
        if (!(node.val in dict)) dict[node.val] = 1;
        else dict[node.val]++;
        
        let output = 0;
        if (node.left == null && node.right == null) {
            output += isPalindromic(dict)?1:0;
        } else {
            output += dfs(node.left, dict);
            output += dfs(node.right, dict);
        }
        
        dict[node.val]--;
        return output;
    };
    
    return dfs(root);
};

function isPalindromic (dict) {
    const values = Object.values(dict);
    const totalCount = values.reduce((a, b) => a + b, 0);
    const centerCount = (totalCount % 2 == 0)? 0 : 1;
    const odds = values.filter(e => e % 2 == 1).length;
    
    return centerCount - odds >= 0;
    
}