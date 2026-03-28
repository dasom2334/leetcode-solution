class Solution:
    def findTheString(self, lcp: List[List[int]]) -> str:
        n = len(lcp)
        result = [''] * n
        cur = ord('a')

        for i in range(n):
            if result[i]:
                continue
            if cur > ord('z'):
                return ''
            result[i] = chr(cur)
            for j in range(n):
                if lcp[i][j] > 0:
                    result[j] = result[i]
            cur += 1
        
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                if result[i] != result[j]:
                    if lcp[i][j] > 0:
                        return ''
                else:
                    if (i == n - 1 or j == n - 1):
                        if lcp[i][j] != 1:
                            return ''
                    elif lcp[i][j] != lcp[i + 1][j + 1] + 1:
                        return ''
        
        return "".join(result)
