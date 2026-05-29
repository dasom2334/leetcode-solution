class Solution:
    def minElement(self, nums: List[int]) -> int:
        result = inf
        n = len(nums)
        for i in range(n):
            cur = nums[i]
            total = 0
            while cur:
                total += cur % 10
                cur = cur // 10
            result = min(result, total)
        return result