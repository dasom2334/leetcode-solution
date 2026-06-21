class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        sorted_costs = sorted(costs)
        cur_coins = coins
        result = 0
        for cost in sorted_costs:
            if cur_coins < cost:
                break
            cur_coins -= cost
            result += 1

        return result