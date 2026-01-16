class Solution:
    def maximizeSquareArea(self, m: int, n: int, hFences: List[int], vFences: List[int]) -> int:
        ordered_m = sorted(hFences + [1, m], reverse=True)
        ordered_n = sorted(vFences + [1, n], reverse=True)
        mod = 10 ** 9 + 7

        m_len_set = set()
        n_len_set = set()
        
        for m_index1 in range(len(ordered_m)):
            for m_index2 in range(m_index1 + 1, len(ordered_m)):
                m_len = ordered_m[m_index1] - ordered_m[m_index2]
                m_len_set.add(m_len)

        for n_index1 in range(len(ordered_n)):
            for n_index2 in range(n_index1 + 1, len(ordered_n)):
                n_len = ordered_n[n_index1] - ordered_n[n_index2]
                n_len_set.add(n_len)


        common = m_len_set & n_len_set

        if not common:
            return -1
        return max(common) ** 2 % mod