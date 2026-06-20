class Solution:
    def maxBuilding(self, n: int, restrictions: List[List[int]]) -> int:
        
        result = 0

        rs = [[1, 0]] + sorted(restrictions)
        if rs[-1][0] != n:
            rs.append([n, n - 1])
        rsn = len(rs)

        
        for i in range(1, rsn):
            rs[i][1] = min(rs[i][1], rs[i-1][1] + rs[i][0] - rs[i-1][0])
        for i in range(rsn - 2, -1, -1):
            rs[i][1] = min(rs[i][1], rs[i+1][1] + rs[i+1][0] - rs[i][0])
        for i in range(1, rsn):
            l, r = rs[i-1][0], rs[i][0]
            lv, rv = rs[i-1][1], rs[i][1]
            peak = (r - l + lv + rv) // 2
            result = max(peak, result)

        return result