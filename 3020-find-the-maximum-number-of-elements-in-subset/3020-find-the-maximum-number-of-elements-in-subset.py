class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        result = 0
        cnts = Counter(nums)
        visited = set()
        
        if cnts[1]:
            result = cnts[1] if cnts[1] % 2 == 1 else cnts[1] - 1
        
        for i in nums:
            if i in visited or i not in cnts or i == 1:
                continue
            r = 0
            cur = i
            while cnts[cur] >= 1:
                r += 1
                if cnts[cur] == 1:
                    break
                cur = cur ** 2
                if cur in cnts:
                    r += 1
                visited.add(cur)

            result = max(r, result)

        return result