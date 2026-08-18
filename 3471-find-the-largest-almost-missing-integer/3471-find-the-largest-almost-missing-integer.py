class Solution:
    def largestInteger(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if k == n:
            return max(nums)

        cnts = defaultdict(int)
        for i in range(n):
            num = nums[i]
            l = max(0, i - k + 1)
            r = min(n - 1, i + k - 1)
            cnts[num] += r - l + 2 - k
        result = -1
        for k in cnts:
            if cnts[k] == 1:
                result = max(result, k)
        return result