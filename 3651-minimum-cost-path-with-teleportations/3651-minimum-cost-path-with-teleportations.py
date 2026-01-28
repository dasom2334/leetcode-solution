class Solution:
    def minCost(self, grid: List[List[int]], k: int) -> int:
        INF = float('inf')
        n, m = len(grid), len(grid[0])

        vals = sorted({v for row in grid for v in row})
        U = len(vals)
        idx_map = {v: i for i, v in enumerate(vals)}

        transport = [[INF] * (k + 1) for _ in range(U)]

        dp = [[[INF] * (k + 1) for _ in range(m)] for _ in range(n)]

        transport[idx_map[grid[0][0]]][0] = 0
        dp[0][0][0] = 0


        for kk in range(k + 1): 
            if kk > 0:
                items = [INF] * (U + 1)
                for u in range(U - 1, -1, -1):
                    items[u] = min(items[u + 1], transport[u][kk - 1])
            else:
                items = []
            for i in range(n):
                for j in range(m):
                    v = grid[i][j]

                    top = dp[i - 1][j][kk] if i > 0 else INF
                    left = dp[i][j - 1][kk] if j > 0 else INF
                    noTransV = min(top + v, left + v, dp[i][j][kk])
                    u = idx_map[v]
                    if kk > 0:
                        transV = items[u]
                    else:
                        transV = INF

                    dp[i][j][kk] = min(transV, noTransV)
                    transport[u][kk] = min(dp[i][j][kk], transport[u][kk], dp[i][j][kk])


        return min(dp[n - 1][m - 1])
        