class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        n = len(nums)
        
        LOG = 1
        while 2**LOG < n:
            LOG += 1
        LOG += 1
        
        mn = [nums[:] for _ in range(LOG)]
        mx = [nums[:] for _ in range(LOG)]
        
        for p in range(1, LOG):
            for i in range(n - 2**p + 1):
                # print(p, i, p-1, i + 2**(p-1))
                mn[p][i] = min(mn[p-1][i], mn[p-1][i + 2**(p-1)])
                mx[p][i] = max(mx[p-1][i], mx[p-1][i + 2**(p-1)])
        
        def query(l, r):
            length = r - l + 1
            p = 0
            while 2**(p+1) <= length:
                p += 1
            return (
                min(mn[p][l], mn[p][r - 2**p + 1]),
                max(mx[p][l], mx[p][r - 2**p + 1])
            )

        q = []
        for l in range(n):
            lo, hi = query(l, n-1)
            v = hi - lo
            q.append((-v, l, n-1))
        heapq.heapify(q)   
        ans = 0
        while k:
            neg_val, l, r = heapq.heappop(q)
            ans -= neg_val
            k -= 1
            if r > l:
                range_min, range_max = query(l, r - 1)
                heapq.heappush(q, (-(range_max - range_min), l, r - 1))
        return ans