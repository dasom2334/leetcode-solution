class Solution:
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        if rows == 1 or len(encodedText) == 0:
            return encodedText

        l = len(encodedText)
        cols = (l // rows)
        result = ["" for _ in range(l)]
        cur_round = 0
        pointer = cols + 1
        result[0] = encodedText[0]
        idx = 1
        
        while pointer > 0 and l > pointer:
            validation = idx
            char = encodedText[pointer] 
            # print(idx, char, pointer)
            result[idx] = char
            pointer += cols + 1
            idx += 1
            if pointer > l:
                cur_round += 1
                pointer = cur_round
            
            

        # print(result)
        return "".join(result).rstrip()