class Solution:
    def stringIndices(self, wordsContainer: List[str], wordsQuery: List[str]) -> List[int]:
        trie = {
            'idxs': list(range(len(wordsContainer)))
        }
        def link_trie(index: int, dict_pointer: dict, rest_word: str):
            if len(rest_word) == 0:
                return
            cur_char = rest_word[-1]
            if not cur_char in dict_pointer:
                dict_pointer[cur_char] = {
                    'idxs': []
                }
            dict_pointer[cur_char]['idxs'].append(index)
            link_trie(index, dict_pointer[cur_char], rest_word[:-1])
        
        for i in range(len(wordsContainer)):
            link_trie(i, trie, wordsContainer[i])

        result = []
        def get_tail_idxs(word: str, dict_pointer: dict):
            if len(word) == 0:
                # print(word, dict_pointer)
                return dict_pointer['idxs']
            cur_char = word[-1]
            if not cur_char in dict_pointer:
                # print(word, dict_pointer)
                return dict_pointer['idxs']
            
            return get_tail_idxs(word[:-1], dict_pointer[cur_char])

            
        for i in range(len(wordsQuery)):
            idxs = get_tail_idxs(wordsQuery[i], trie)
            idxs.sort(key=lambda x: len(wordsContainer[x]))
            result.append(idxs[0])


        return result