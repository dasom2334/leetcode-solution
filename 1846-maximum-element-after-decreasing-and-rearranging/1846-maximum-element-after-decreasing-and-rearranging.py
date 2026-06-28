class Solution:
    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:
        sorted_arr = sorted(arr)
        n = len(arr)
        print(sorted_arr)

        cur = 0
        for num in sorted_arr:
            cur = min(cur + 1, num)
        return cur