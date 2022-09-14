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
            output += Object.values(dict).filter(e => e % 2 == 1).length <= 1 ?1:0;
        } else {
            output += dfs(node.left, dict);
            output += dfs(node.right, dict);
        }
        
        dict[node.val]--;
        return output;
    };
    return dfs(root);
};

