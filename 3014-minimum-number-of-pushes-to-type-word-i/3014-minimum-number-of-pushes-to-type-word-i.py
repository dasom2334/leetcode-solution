class Solution:
    def minimumPushes(self, word: str) -> int:
        cnts = Counter(word)
        key_map = {}
        cur = 0
        touch = 0
        for char in sorted(cnts):
            if cur % 8 == 0:
                touch += 1
            key_map[char] = touch
            cur += 1
        return sum(list(map(lambda x: key_map[x], word)))