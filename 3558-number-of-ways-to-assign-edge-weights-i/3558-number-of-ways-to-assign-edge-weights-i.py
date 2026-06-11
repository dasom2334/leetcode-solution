class Solution:
    def assignEdgeWeights(self, edges: List[List[int]]) -> int:
        n = len(edges)
        address = [[] for _ in range(n + 2)]

        for [p, c] in edges:
            address[p].append(c)
            address[c].append(p)
        visited = set()
        def dfs(node: int, cnt: int):
            parents = address[node]
            if node in visited:
                return cnt - 1

            visited.add(node)
            edge_cnts = map(lambda x: dfs(x, cnt + 1), parents)
            return max(edge_cnts)
        max_depth = dfs(1, 0)
        
        mod = 10 ** 9 + 7
        return pow(2, max_depth - 1, mod)
