class Solution:
    def mapWordWeights(self, words: List[str], weights: List[int]) -> str:
        characters = 'abcdefghijklmnopqrstuvwxyz'
        weights_dict = dict(zip(characters, weights))
        print(weights_dict)

        result = []

        for word in words:
            weight = sum(weights_dict[w] for w in word)
            rest = weight % 26
            r = characters[-rest-1]
            result.append(r)
        
        return ''.join(result)