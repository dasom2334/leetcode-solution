class Solution:
    def __init__(self):
        self.typo_map = {}
        keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for i in range(len(keys)):
            x = i // 6
            y = i % 6
            self.typo_map[keys[i]] = (x, y)

    def getLength(self, char1: tuple, char2:tuple):
        if char1 == '' or char2 == '':
            return 0
        if char1 == '-' or char2 == '-':
            return float('inf')
        x1, y1 = self.typo_map[char1]
        x2, y2 = self.typo_map[char2]
        return abs(x1 - x2) + abs(y1 - y2)
    def minimumDistance(self, word: str) -> int:
        dp = {}

        def doDp(i, other_finger):
            key = (i, other_finger)
            if key in dp:
                return dp[key]
            if i == len(word): 
                return 0
            
            cur_char = word[i]
            prev_char = word[i - 1] if i > 0 else ''
            
            cost1 = self.getLength(prev_char, cur_char) + doDp(i + 1, other_finger)
            cost2 = self.getLength(other_finger, cur_char) + doDp(i + 1, prev_char)
            dp[key] = min(cost1, cost2)
            return dp[key]
        return doDp(0, '')
