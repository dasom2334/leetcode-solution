class Solution:
    def pathExistenceQueries(self, n: int, nums: List[int], maxDiff: int, queries: List[List[int]]) -> List[int]:
        LOG = n.bit_length() + 1
        up = [[0] * LOG for _ in range(n)]

        pairs = sorted(range(n), key=lambda idx: nums[idx])
        sorted_nums = [nums[idx] for idx in pairs]
        orig_to_sorted = [0] * n
        for sorted_pos, orig_idx in enumerate(pairs):
            orig_to_sorted[orig_idx] = sorted_pos

        cur = 0
        for i in range(n):
            cur = max(i, cur)
            while cur + 1 < n and sorted_nums[cur + 1] - sorted_nums[i] <= maxDiff:
                cur += 1
            up[i][0] = cur

        for j in range(1, LOG):
            for i in range(n):
                before = up[i][j - 1]
                up[i][j] = up[before][j - 1]

        result = []
        for a, b in queries:
            if a == b:
                result.append(0)
                continue
            s = orig_to_sorted[a]
            e = orig_to_sorted[b]
            if s > e:
                s, e = e, s
            
            cnt = 0
            cur = s
            for i in range(LOG - 1, -1, -1):
                if up[cur][i] < e:
                    cur = up[cur][i]
                    cnt += (2 ** i)
            if up[cur][0] >= e:
                result.append(cnt + 1)
            else:
                result.append(-1)

        return result