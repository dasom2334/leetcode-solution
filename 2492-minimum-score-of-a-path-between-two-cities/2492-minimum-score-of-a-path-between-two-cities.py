class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        # edges = [[inf] * n for _ in range(n)]
        edges = defaultdict(list)
        mem = [False] * n
        for a, b, d in roads:
            edges[a - 1].append([b - 1, d])
            edges[b - 1].append([a - 1, d])
        
        bfsq = [0]
        mem[0] = True
        result = inf

        while bfsq:
            new_bfsq = []
            for c in bfsq:
                for e, ev in edges[c]:
                    result = min(result, ev)
                    if mem[e]:
                        continue
                    mem[e] = True
                    new_bfsq.append(e)
            bfsq = new_bfsq
        return result
