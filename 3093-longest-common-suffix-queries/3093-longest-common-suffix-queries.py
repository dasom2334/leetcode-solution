class Solution:
    def stringIndices(self, wordsContainer: List[str], wordsQuery: List[str]) -> List[int]:
        trie = {
            'idx': 0
        }
        def link_trie(index: int, dict_pointer: dict, rest_word: str):
            if len(rest_word) == 0:
                return
            cur_char = rest_word[-1]
            if not cur_char in dict_pointer:
                dict_pointer[cur_char] = {
                    'idx': index
                }
            idx = dict_pointer[cur_char]['idx']
            if (
                (len(wordsContainer[idx]) > len(wordsContainer[index]))
                or (len(wordsContainer[idx]) == len(wordsContainer[index]) and idx > index)
            ):
                dict_pointer[cur_char]['idx'] = index
            link_trie(index, dict_pointer[cur_char], rest_word[:-1])
        
        for i in range(len(wordsContainer)):
            idx = trie['idx']
            if (
                (len(wordsContainer[idx]) > len(wordsContainer[i]))
                or (len(wordsContainer[idx]) == len(wordsContainer[i]) and idx > i)
            ):
                trie['idx'] = i
            link_trie(i, trie, wordsContainer[i])

        result = []
        def get_tail_idxs(word: str, dict_pointer: dict):
            if len(word) == 0:
                # print(word, dict_pointer)
                return dict_pointer['idx']
            cur_char = word[-1]
            if not cur_char in dict_pointer:
                # print(word, dict_pointer)
                return dict_pointer['idx']
            
            return get_tail_idxs(word[:-1], dict_pointer[cur_char])

            
        for i in range(len(wordsQuery)):
            idx = get_tail_idxs(wordsQuery[i], trie)
            result.append(idx)


        return result