class Solution:
    def earliestFinishTime(self, landStartTime: List[int], landDuration: List[int], waterStartTime: List[int], waterDuration: List[int]) -> int:
        def get_finish_time(
            st1: List[int], sd1: List[int],
            st2: List[int], sd2: List[int],
        ):
            min1 = inf
            for i in range(len(st1)):
                min1 = min(min1, st1[i] + sd1[i])
            min2 = inf
            for i in range(len(st2)):
                min2 = min(min2, max(min1, st2[i]) + sd2[i])
            return min2
            
        m1 = get_finish_time(
            landStartTime, landDuration,
            waterStartTime, waterDuration
        )
        m2 = get_finish_time(
            waterStartTime, waterDuration,
            landStartTime, landDuration
        )
        return min(m1, m2)