class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        sorted_costs = sorted(cost, reverse=True)
        n = len(cost)
        result = 0
        
        for i in range(n):
            if (i + 1) % 3 != 0:
                result += sorted_costs[i]

        return result