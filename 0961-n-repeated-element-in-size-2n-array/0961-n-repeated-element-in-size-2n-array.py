class Solution(object):
    def repeatedNTimes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        targetCnt = len(nums) // 2
        freq = defaultdict(int)
        for num in nums:
            freq[num] += 1
            if freq[num] == targetCnt:
                return num
        return 0
        