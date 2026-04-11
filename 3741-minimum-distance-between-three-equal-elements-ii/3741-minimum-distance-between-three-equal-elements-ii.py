class Solution:
    def minimumDistance(self, nums: List[int]) -> int:
        result_half = float(inf)
        n = len(nums)

        idx_map = defaultdict(list)
        for k in range(n):
            idx_map[nums[k]].append(k)
            if len(idx_map[nums[k]]) >= 3:
                i = idx_map[nums[k]][-3]
                result_half = min(result_half, k - i)
                
        return -1 if result_half >= n else result_half * 2
                