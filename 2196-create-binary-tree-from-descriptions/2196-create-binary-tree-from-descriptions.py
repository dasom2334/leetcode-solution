# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        parents = set()
        childs = set()
        nodes = dict()
        
        for [p,c,l] in descriptions:
            if p not in nodes:
                nodes[p] = TreeNode(p)
            if c not in nodes:
                nodes[c] = TreeNode(c)
            parent = nodes[p]
            child = nodes[c]
            if l == 1:
                parent.left = child
            else:
                parent.right = child
            parents.add(nodes[p])
            childs.add(nodes[c])
        head = list(parents - childs)[0]
        return head