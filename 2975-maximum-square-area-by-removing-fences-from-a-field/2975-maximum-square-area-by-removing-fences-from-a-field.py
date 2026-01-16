class Solution:
    def getLen(self, point: int):
        mod = 10 ** 9 + 7
        return (point) ** 2 
    def maximizeSquareArea(self, m: int, n: int, hFences: List[int], vFences: List[int]) -> int:
        ordered_m = sorted(hFences + [m], reverse=True)
        ordered_n = sorted(vFences + [n], reverse=True)
        mod = 10 ** 9 + 7

        m_len_set = set()
        
        # print(ordered_m, ordered_n)
        for m_index1 in range(len(ordered_m)):
            m_len_set.add(ordered_m[m_index1] - 1)
            for m_index2 in range(m_index1, len(ordered_m)):
                m_len = ordered_m[m_index1] - ordered_m[m_index2]
                m_len_set.add(m_len)


        result = -1

        # print(m_len_set)
        for n_index1 in range(len(ordered_n)):
            max_n_len = -1
            if ordered_n[n_index1] - 1 in m_len_set:
                result = max(result, self.getLen(ordered_n[n_index1] - 1))
                # print('??', result, self.getLen(ordered_n[n_index1]), ordered_n[n_index1])
            for n_index2 in range(n_index1, len(ordered_n)):
                n_len = ordered_n[n_index1] - ordered_n[n_index2]
                if n_len in m_len_set and n_len != 0:
                    max_n_len = max(max_n_len, n_len)
            if max_n_len != -1:
                result = max(result, self.getLen(max_n_len))
                # print('???', max_n_len, n_index1, n_index2, result)
        if result != -1:
            result %= mod
        return result 