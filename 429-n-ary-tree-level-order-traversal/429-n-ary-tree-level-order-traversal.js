/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    
    const dfs = (node, level) => {
        if (node == null) return;
        
        if (result.length < level + 1) result.push(new Array());
        
        result[level].push(node.val);
        node.children.forEach(e => dfs(e, level+1));
    }
    
    dfs(root, 0);
    return result;
};