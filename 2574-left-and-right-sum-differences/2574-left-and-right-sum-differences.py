class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        result = []
        right = sum(nums)
        left = 0
        n = len(nums)
        for i in range(n):
            right -= nums[i]
            result.append(abs(right - left))
            left += nums[i]

        return result