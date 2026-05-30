class Solution:
    def getResults(self, queries: List[List[int]]) -> List[bool]:
        n = len(queries) 
        dl = min((5 * (10 ** 4), n * 3)) + 1
        obstacles = SortedList([0, dl - 1])
        seg = [0] * (dl * 4)
        

        def update(node, start, end, idx, val):
            if start == end:
                seg[node] = val
                return
            mid = (start + end) // 2
            if idx <= mid: update(node*2, start, mid, idx, val)
            else: update(node*2+1, mid+1, end, idx, val)
            seg[node] = max(seg[node*2], seg[node*2+1])

        def tree_query(node, start, end, l, r):
            if r < start or end < l: return 0
            if l <= start and end <= r: return seg[node]
            mid = (start + end) // 2
            return max(tree_query(node*2, start, mid, l, r), tree_query(node*2+1, mid+1, end, l, r))

        update(1, 0, dl-1, dl-1, dl-1)

        result = []
        for query in queries:
            q = query[0]
            if q == 1:
                [_, x] = query
                idx = obstacles.bisect_right(x)
                obstacles.add(x)
                idx = obstacles.index(x)
                prev_ob, next_ob = obstacles[idx-1], obstacles[idx+1]
                update(1, 0, dl-1, x, x - prev_ob)
                update(1, 0, dl-1, next_ob, next_ob - x)
            if q == 2:
                [_, x, sz] = query
                idx = obstacles.bisect_right(x)
                prev_ob = obstacles[idx - 1]
                max_space = max(x - prev_ob, tree_query(1, 0, dl-1, 0, prev_ob))
                result.append(max_space >= sz)

        return result