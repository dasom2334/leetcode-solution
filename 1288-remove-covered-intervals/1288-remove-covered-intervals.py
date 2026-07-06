class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        sorted_intervals = sorted(intervals, key=lambda x: (x[0], -x[1]))
        print(sorted_intervals)

        result = 0
        cur = 0

        for s, e in sorted_intervals:
            if cur < e:
                result += 1
            cur = max(cur, e)

        return result