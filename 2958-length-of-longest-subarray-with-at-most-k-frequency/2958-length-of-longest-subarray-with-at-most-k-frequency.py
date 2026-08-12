class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        l, r, n = 0, 1, len(nums)
        cnts = defaultdict(int)
        cnts[nums[0]] = 1
        result = 1
        cur_len = 1

        while r < n:
            cnts[nums[r]] += 1
            cur_len += 1
            while cnts[nums[r]] > k:
                cnts[nums[l]] -= 1
                l += 1
                cur_len -= 1
            r += 1
            result = max(result, cur_len)

        return result