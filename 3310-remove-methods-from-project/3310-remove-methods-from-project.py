class Solution:
    def remainingMethods(self, n: int, k: int, invocations: List[List[int]]) -> List[int]:
        graph = {i: [] for i in range(n)}
        for u, v in invocations:
            graph[u].append(v)
        visited = [False] * n
        suspicious = set()

        dfs = [k]
        while dfs:
            cur = dfs.pop()
            if visited[cur]:
                continue
            visited[cur] = True
            suspicious.add(cur)
            for node in graph[cur]:
                dfs.append(node)

        for a, b in invocations:
            if a not in suspicious and b in suspicious:
                return list(range(n))
        result = set(range(n)) - suspicious
        return list(result)