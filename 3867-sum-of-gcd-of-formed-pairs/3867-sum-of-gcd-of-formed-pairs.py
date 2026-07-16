class Solution:
    def gcdSum(self, nums: list[int]) -> int:
        n = len(nums)
        mx = nums[:]

        for i in range(1, n):
            mx[i] = max(mx[i-1], mx[i])

        prefix_gcd = [0] * n
        for i in range(n):
            prefix_gcd[i] = math.gcd(nums[i], mx[i])
        prefix_gcd.sort()

        result = 0
        for i in range(n // 2):
            result += math.gcd(prefix_gcd[i], prefix_gcd[-i - 1])
        return result