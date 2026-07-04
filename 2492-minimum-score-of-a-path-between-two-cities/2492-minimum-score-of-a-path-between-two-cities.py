class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        # edges = [[inf] * n for _ in range(n)]
        edges = defaultdict(list)
        mem = [inf] * n
        for a, b, d in roads:
            edges[a - 1].append([b - 1, d])
            edges[b - 1].append([a - 1, d])
        
        bfsq = [[0, inf]]

        while bfsq:
            new_bfsq = []
            for c, v in bfsq:
                for e, ev in edges[c]:
                    cur_v = min(v, ev)
                    if mem[e] <= cur_v:
                        continue
                    mem[e] = cur_v
                    new_bfsq.append([e, cur_v])
            bfsq = new_bfsq
        return mem[n - 1]
