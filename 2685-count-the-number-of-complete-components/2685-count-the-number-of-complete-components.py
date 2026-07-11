class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        cnts = [0] * n
        mem = defaultdict(list)
        for i, j in edges:
            if i > j:
                i, j = j, i
            mem[i].append(j)
            mem[j].append(i)
            cnts[i] += 1
            cnts[j] += 1
        visited = [False] * n
        result = 0
        for i in range(n):
            if visited[i]:
                continue
            cnt = len(mem[i])
            complete = not visited[i] or cnts[i] != cnt
            visited[i] = True
            s = set(mem[i] + [i])
            for m in mem[i]:
                if len(mem[m]) != cnt or visited[m] or s != set(mem[m] + [m]):
                    complete = False
                visited[m] = True
            if complete:
                result += 1
        return result