class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        n = len(word)
        special_set = set()
        character_set = set()

        for i in range(n):
            w = word[i]
            u = w.upper()
            l = w.lower()
            is_uppercase = w == u
            if (
                is_uppercase  
                and l in character_set
                and not w in character_set
            ):    
                special_set.add(l)
            elif (
                not is_uppercase  
                and l in character_set
                and u in character_set
            ):    
                special_set.discard(l)
            character_set.add(w)
        return len(special_set)

