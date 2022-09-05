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
    
//     const dfs = (node, level) => {
//         if (node == null) return;
//         if (result.length < level + 1) result.push([]);
//         result[level].push(node.val);
//         node.children.forEach(e => dfs(e, level+1));
//     }
    
//     dfs(root, 0);
    
    
    let tv = [[root, 0]];
    while(tv.length > 0) {
        const [node, level] = tv.shift();
        
        if (node == null) continue;
        if (result.length < level + 1) result.push([]);
        result[level].push(node.val);
        node.children.forEach(e => tv.push([e, level+1]));
    }
    
    return result;
};