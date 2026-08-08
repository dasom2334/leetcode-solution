class Solution:
    def validSequence(self, word1: str, word2: str) -> List[int]:
        n, m = len(word1), len(word2)
        dp = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            dp[i] = dp[i + 1]
            if dp[i + 1] < m and word1[i] == word2[m - dp[i + 1] - 1]:
                dp[i] = dp[i + 1] + 1
        
        used = False
        j = 0
        result = []
        for i in range(n):
            if j == m:
                break
            if word1[i] == word2[j]:
                result.append(i)
                j += 1
            elif not used and dp[i + 1] >= m - j - 1:
                result.append(i)
                j += 1
                used = True

        if j != m:
            return []

        return result