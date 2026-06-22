class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        cnts = Counter(text)

        result = min(
            cnts['b'],
            cnts['a'],
            cnts['l'] // 2,
            cnts['o'] // 2,
            cnts['n'],
        )
        
        return result