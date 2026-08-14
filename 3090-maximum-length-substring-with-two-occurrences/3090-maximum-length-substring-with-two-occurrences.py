class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        n = len(s)
        cnts = defaultdict(int)
        result = 1
        l = 0
        cnts[s[0]] += 1
        for i in range(1, n):
            cnts[s[i]] += 1
            while cnts[s[i]] > 2:
                cnts[s[l]] -= 1
                l += 1
            result = max(i - l + 1, result)
        return result
            