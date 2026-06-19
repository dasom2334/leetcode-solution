class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        cur = 0
        result = cur

        for g in gain:
            cur += g
            result = max(result, cur)

        return result