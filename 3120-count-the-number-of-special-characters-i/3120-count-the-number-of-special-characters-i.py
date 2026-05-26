class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        s = set(word)

        result = 0
        for w in list(s):
            u = w.upper()
            l = w.lower()
            if u in s and l in s:
                result += 1
                s.remove(l)
                s.remove(u)
        return result