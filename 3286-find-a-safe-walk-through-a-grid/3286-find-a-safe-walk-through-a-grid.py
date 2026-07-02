class Solution:
    def findSafeWalk(self, grid: List[List[int]], health: int) -> bool:
        m, n = len(grid), len(grid[0])
        visited = [[[False] * (health + 1) for _ in range(n)] for _ in range(m)]
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
                if grid[x][y] == 1:
                    h -= 1
                if h < 0 or visited[x][y][h]:
                    continue
                visited[x][y][h] = True
                if h == 0:
                    continue
                if x == m - 1 and y == n - 1:
                    return True
                for d in directions:
                    new_q.append([
                        x + d[0],
                        y + d[1],
                        h
                    ])
            q = new_q
        return False