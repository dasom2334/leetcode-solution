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
    let numberDict = {};
    
    const dfs = (node, dict) => {
        if (node == null) return 0;
        
        if (!(node.val in numberDict)) numberDict[node.val] = 1;
        else numberDict[node.val]++;
        
        let output = 0;
        if (node.left == null && node.right == null) {
            output += isPalindromic(dict)?1:0;
        } else {
            output += dfs(node.left, dict);
            output += dfs(node.right, dict);
        }
        
        numberDict[node.val]--;
        return output;
    };
    
    return dfs(root, numberDict);
};

function isPalindromic (dict) {
    const values = Object.values(dict);
    const totalCount = values.reduce((a, b) => a + b, 0);
    const centerCount = (totalCount % 2 == 0)? 0 : 1;
    const odds = values.filter(e => e % 2 == 1).length;
    
    // console.log(dict, centerCount - odds);
    return centerCount - odds >= 0;
    
}