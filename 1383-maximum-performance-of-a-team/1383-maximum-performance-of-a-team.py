from queue import PriorityQueue


class Solution:
    def maxPerformance(self, n: int, speed: List[int], efficiency: List[int], k: int) -> int:
        result = 0
        speedSum = 0
        
        heap = PriorityQueue()
        
        for eff, spd in sorted(zip(efficiency, speed), reverse=True):
            speedSum += spd
            heap.put(spd)
            if heap.qsize() > k:
                speedSum -= heap.get()
            
            result = max(result, speedSum * eff)
        
        
        return result % 1000000007
        
        