class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        n = len(s)
        idxs = [-1] * 3
        result = 0
        for i in range(n):
            if s[i] == 'a':
                idxs[0] = i
            elif s[i] == 'b':
                idxs[1] = i
            elif s[i] == 'c':
                idxs[2] = i
            result += 1 + min(idxs)

        return result