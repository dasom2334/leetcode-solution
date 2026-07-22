class Solution:
    def maxActiveSectionsAfterTrade(self, s: str, queries: List[List[int]]) -> List[int]:
        n = len(s)
        segs = [[0, 1]]
        cur = s[0]
        for i in range(1, n):
            if cur == s[i]:
                segs[-1][1] += 1
            else:
                segs.append([i, 1])
                cur = s[i]
        zero_starts = []
        zero_ends = []
        zero_lengths = []

        for start, length in segs:
            if s[start] == '0':
                zero_starts.append(start)
                zero_ends.append(start + length - 1)
                zero_lengths.append(length)

        zero_count = len(zero_lengths)
        pair_count = max(0, zero_count - 1)
        pair_gain = [
            zero_lengths[i] + zero_lengths[i + 1]
            for i in range(pair_count)
        ]


        size = 1
        while size < pair_count:
            size *= 2

        tree = [0] * (size * 2)

        for i, value in enumerate(pair_gain):
            tree[size + i] = value

        for i in range(size - 1, 0, -1):
            tree[i] = max(tree[i * 2], tree[i * 2 + 1])

        def range_max(left: int, right: int) -> int:

            if left > right:
                return 0

            left += size
            right += size
            result = 0

            while left <= right:
                if left % 2 == 1:
                    result = max(result, tree[left])
                    left += 1

                if right % 2 == 0:
                    result = max(result, tree[right])
                    right -= 1

                left //= 2
                right //= 2

            return result

        base = s.count('1')
        result = []
        for l, r in queries:
            first = bisect_left(zero_ends, l)
            last = bisect_right(zero_starts, r) - 1
            if (
                first >= zero_count
                or last < 0
                or first >= last
            ):
                result.append(base)
                continue
            lidx, lcnt = segs[first]
            ridx, rcnt = segs[last]

            left_zero_len = (
                zero_ends[first]
                - max(zero_starts[first], l)
                + 1
            )
            right_zero_len = (
                min(zero_ends[last], r)
                - zero_starts[last]
                + 1
            )

            if first + 1 == last:
                max_gain = left_zero_len + right_zero_len
            else:
                left_candidate = (
                    left_zero_len
                    + zero_lengths[first + 1]
                )

                right_candidate = (
                    zero_lengths[last - 1]
                    + right_zero_len
                )

                inner_candidate = range_max(
                    first + 1,
                    last - 2
                )   

                max_gain = max(
                    left_candidate,
                    right_candidate,
                    inner_candidate
                )

            result.append(base + max_gain)

        return result

        