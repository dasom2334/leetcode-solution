class Solution:
    def romanToInt(self, s: str) -> int:
        dict = {
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000,
        }
        
        dict2 = {
            'I' : ['V', 'X'],
            'X': ['L', 'C'],
            'C': ['D', 'M']
        }
        
        before = ''
        count = 0
        for charater in s:
            if before in dict2 and charater in dict2[before]:
                count += dict[charater] - dict[before]
                before = ''
            else:
                if before in dict:
                    count += dict[before]
                before = charater
                
        if before in dict:
            count += dict[before]
        return count
                    
        