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
var minCameraCover = function(root) {
    if (root.left === null && root.right === null) {
        return 1;
    }
    let result = 0;
    // root.camera = false;
    let visited = [null];
    let toVisit = [root];
    while(toVisit.length > 0) {
        const node = toVisit.pop();
        if (!visited.includes(node)) {
            if (node.right === null && node.left === null) {
                // console.log('case1');
                node.camera = false;
                node.covered = false;
            } else if ((node.right != null && node.right.covered == false) || (node.left != null && node.left.covered == false)) {
                // console.log('case2');
                node.camera = true;
                node.covered = true;
                if (node.right != null) node.right.covered = true;
                if (node.left != null) node.left.covered = true;
                result++;
            } else if ((node.right != null && node.right.camera == true) || (node.left != null && node.left.camera == true)) {
                // console.log('case3');
                if(node.camera == undefined) node.camera = false;
                node.covered = true;
            } else if ((node.right != null && node.right.covered == true) || (node.left != null && node.left.covered == true)) {
                // console.log('case4');
                if(node.camera == undefined) node.camera = false;
                node.covered = false;
            }
            if (node.covered !== undefined) visited.push(node);
            toVisit = [...toVisit, node, node.right,  node.left];
            // console.log(node.camera, node.covered, node);
            // console.log(toVisit);
        }
    }
    if(!root.covered) result++;
    return result;
};