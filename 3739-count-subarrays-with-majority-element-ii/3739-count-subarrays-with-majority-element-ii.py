class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)
        result = 0
        cur = 0
        below = 0
        cnt_map = defaultdict(int)

        for i in range(n):
            if nums[i] == target:
                cur += 1
            else:
                cur -= 1
            prefix[i + 1] = cur
        cnt_map[prefix[0]] += 1
        for i in range(1, n + 1):
            if prefix[i] > prefix[i - 1]:
                below += cnt_map[prefix[i - 1]]
            else:
                below -= cnt_map[prefix[i]]
            result += below

            cnt_map[prefix[i]] += 1
        return result