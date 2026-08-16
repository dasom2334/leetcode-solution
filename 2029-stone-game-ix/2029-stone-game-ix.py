class Solution:
    def stoneGameIX(self, stones: List[int]) -> bool:
        n = len(stones)
        cnts = defaultdict(int)

        for stone in stones:
            origin = stone % 3
            cnts[origin] += 1
        
        if cnts[0] % 2 == 0:
            return cnts[1] >= 1 and cnts[2] >= 1


        return abs(cnts[1] - cnts[2]) > 2
        
