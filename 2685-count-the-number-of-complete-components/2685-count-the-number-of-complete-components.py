class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        mem = defaultdict(set)
        for i in range(n):
            mem[i].add(i)

        for i, j in edges:
            if i > j:
                i, j = j, i
            mem[i].add(j)
            mem[j].add(i)
        visited = [False] * n
        result = 0
        for i in range(n):
            if visited[i]:
                continue
            cnt = len(mem[i])
            visited[i] = True
            complete = True
            for m in mem[i]:
                if mem[i] != mem[m]:
                    complete = False
                visited[m] = True
            if complete:
                result += 1
        return result