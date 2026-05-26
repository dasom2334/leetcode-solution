class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        s = set()
        n, m = len(arr1), len(arr2)
        result = 0
        for i in range(n):
            num = arr1[i]
            while num > 0:
                s.add(num)
                num //= 10
        
        for i in range(m):
            num = arr2[i]
            cnt = 0
            has = inf
            while num > 0:
                if num in s:
                    has = min(has, cnt)
                num //= 10
                cnt += 1
            # print(result, cnt, has)
            result = max(result, cnt - has)
            
        return result