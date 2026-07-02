class Solution:
    def findSafeWalk(self, grid: List[List[int]], health: int) -> bool:
        m, n = len(grid), len(grid[0])
        visited = [[-1] * n for _ in range(m)]
        q = [[0, 0, health]]

        directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ]
        while q:
            new_q = []
            for x, y, h in q:
                if x < 0 or m <= x or y < 0 or n <= y:
                    continue 
                h -= grid[x][y]
                if h <= visited[x][y]:
                    continue
                visited[x][y] = max(h, visited[x][y])
                # if x == m - 1 and y == n - 1:
                #     return True
                for d in directions:
                    new_q.append([
                        x + d[0],
                        y + d[1],
                        h
                    ])
            q = new_q
        return visited[m - 1][n - 1] >= 1