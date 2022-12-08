/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    const dfs = (node, leafs = []) => {
        if(!node.left && !node.right) {
            leafs.push(node.val);
        }
            
            
        if (node.left) dfs(node.left, leafs);
        if (node.right) dfs(node.right, leafs);
        
        return leafs;
    }
    
    const leafs1 = dfs(root1);
    const leafs2 = dfs(root2);
    // console.log(leafs1)
    // console.log(leafs2)
    
    
    return leafs1.length == leafs2.length && leafs1.filter((e, i) => e !== leafs2[i]).length === 0
    
};