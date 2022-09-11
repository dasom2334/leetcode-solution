class Solution(object):
    def maxPerformance(self, n, speed, efficiency, k):
        """
        :type n: int
        :type speed: List[int]
        :type efficiency: List[int]
        :type k: int
        :rtype: int
        """
        result = 0
        speedSum = 0
        
        heap = []
        
        for eff, spd in sorted(zip(efficiency, speed), reverse=True):
            speedSum += spd
            heapq.heappush(heap, spd)
            if len(heap) > k:
                speedSum -= heapq.heappop(heap)
            
            result = max(result, speedSum * eff)
        
        
        return result % 1000000007
        