class Solution:
    def maximumSafenessFactor(self, grid: List[List[int]]) -> int:
        n = len(grid)
        dp = [[inf] * n for _ in range(n)]
        bfs_q = []
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    bfs_q.append([i, j, i, j])
        while bfs_q:
            new_bfs_q = []
            for x, y, a, b in bfs_q:
                if x < 0 or n <= x or y < 0 or n <= y:
                    continue
                m = abs(a - x) + abs(b - y)
                if dp[x][y] > m:
                    dp[x][y] = m
                    new_bfs_q.append([x + 1, y, a, b])
                    new_bfs_q.append([x - 1, y, a, b])
                    new_bfs_q.append([x, y + 1, a, b])
                    new_bfs_q.append([x, y - 1, a, b])
            bfs_q = new_bfs_q

        if grid[0][0] == 1:
            return 0
        # for i in range(n):
        #     for j in range(n):
        #         if grid[i][j] == 1:
        #             continue
        #         if i == 0 and j == 0:
        #             continue
        #         top = dp[i - 1][j] if i >= 1 else -inf
        #         left = dp[i][j - 1] if j >= 1 else -inf
        #         dp[i][j] = min(max(top, left), dp[i][j])
        # return dp[n - 1][n - 1]
        best = [[-1] * n for _ in range(n)]
        best[0][0] = dp[0][0]
        pq = [(-dp[0][0], 0, 0)]
        while pq:
            negv, x, y = heapq.heappop(pq)
            v = -negv
            if v < best[x][y]:
                continue
            if x == n - 1 and y == n - 1:
                return v
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nx, ny = x + dx, y + dy
                if 0 <= nx < n and 0 <= ny < n:
                    nv = min(v, dp[nx][ny])
                    if nv > best[nx][ny]:
                        best[nx][ny] = nv
                        heapq.heappush(pq, (-nv, nx, ny))
        return best[n - 1][n - 1]