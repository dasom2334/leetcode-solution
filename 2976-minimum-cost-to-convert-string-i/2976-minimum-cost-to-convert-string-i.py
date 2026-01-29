class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        
        alphabet_str = 'abcdefghijklmnopqrstuvwxyz'
        alphabet_len = len(alphabet_str)
        alphabet_map = {v: i for i, v in enumerate(alphabet_str)}
        # print(alphabet_str, alphabet_map)

        dp = [[float('inf')] * alphabet_len for _ in range(alphabet_len)]
        # print(dp)

        # for i in range(alphabet_len):
        #     dp[i][i] = 0

        for i in range(len(original)):
            o = original[i]
            oi = alphabet_map[o]
            c = changed[i]
            ci = alphabet_map[c]
            dp[oi][ci] = min(cost[i], dp[oi][ci])

        for k in range(alphabet_len):
            for i in range(alphabet_len):
                for j in range(alphabet_len):
                    linked_cost = dp[k][j] + dp[i][k]
                    if linked_cost < dp[i][j]:
                        dp[i][j] = linked_cost

        result = 0

        for i in range(len(source)):
            s = source[i]
            si = alphabet_map[s]
            t = target[i]
            ti = alphabet_map[t]
            if si != ti:
                result += dp[si][ti]
                # print(dp[si])

        # print(dp, result)
        
        return result if result != float('inf') else -1
