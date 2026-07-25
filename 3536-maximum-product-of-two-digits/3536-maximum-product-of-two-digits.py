class Solution:
    def maxProduct(self, n: int) -> int:
        arr = list(str(n))
        arr.sort()
        return int(arr[-1]) * int(arr[-2])