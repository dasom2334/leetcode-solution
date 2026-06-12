class Solution:
    def assignEdgeWeights(self, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        n = len(edges)
        address = [[] for _ in range(n + 2)]

        for [p, c] in edges:
            address[p].append(c)
            address[c].append(p)

        depths = [0] * (n + 2)
        LOG = max(1, n.bit_length())
        up = [[0] * (n + 2) for _ in range(LOG)]
        visited = set()
        def dfs(node: int, parent: int, depth: int):
            childes = address[node]
            if node in visited:
                return
            visited.add(node)
            depths[node] = depth
            # up[node] = parent
            up[0][node] = parent
            for child in childes:
                dfs(child, node, depth + 1)
        dfs(1, 0, 0)
        for k in range(1, LOG):
            for v in range(1, n + 2):
                up[k][v] = up[k-1][up[k-1][v]]
        # print(depths)
        # print(up)
        
        mod = 10 ** 9 + 7
        result = []
        def get_same_parent(a: int, b: int):
            if depths[a] < depths[b]:
                a, b = b, a
            d = depths[a] - depths[b]
            for k in range(LOG):
                if d >> k & 1:
                    a = up[k][a]
            if a == b:
                return a
            for k in range(LOG - 1, -1, -1):
                if up[k][a] != up[k][b]:
                    a, b = up[k][a], up[k][b]
            return up[0][a]
            
        # print()
        for q1, q2 in queries:
            if q1 == q2:
                result.append(0)
                continue
            d1 = depths[q1]
            d2 = depths[q2]
            same_parent = get_same_parent(q1, q2)
            pd = depths[same_parent]
            r = d1 + d2 - (pd)*2
            result.append(pow(2, r - 1, mod))
            # print(d1, d2, same_parent, pd, r,)
        return result
